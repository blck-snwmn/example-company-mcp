# 会社組織情報MCPシステム設計書

## 1. システム概要

### 1.1 目的
このシステムは、会社の組織構造に関する情報を一元管理し、必要な情報を効率的に取得するためのMCP（Message Control Protocol）サーバーを提供します。

### 1.2 主要機能
- 組織構造（事業部、部署、チーム）の情報取得
- 組織ごとの連絡先情報（Slackチャンネル、依頼チャンネル、メンション）の取得

## 2. 機能要件

### 2.1 組織情報取得機能
- 組織の階層構造を取得できる
- 組織名による検索が可能
- 組織の詳細情報（説明、責任者など）を取得できる

### 2.2 連絡先情報取得機能
- 組織ごとのSlackチャンネル情報を取得
- 依頼用のチャンネル情報を取得
- 必要なメンション情報を取得

## 3. データ構造

### 3.1 JSONスキーマ

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "object",
  "properties": {
    "organizations": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "id": {
            "type": "string",
            "description": "組織の一意のID"
          },
          "name": {
            "type": "string",
            "description": "組織名"
          },
          "type": {
            "type": "string",
            "enum": ["business_unit", "department", "team"],
            "description": "組織の種類"
          },
          "parent_id": {
            "type": "string",
            "description": "親組織のID"
          },
          "description": {
            "type": "string",
            "description": "組織の説明"
          },
          "contact_info": {
            "type": "object",
            "properties": {
              "slack_channels": {
                "type": "array",
                "items": {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string",
                      "description": "チャンネル名"
                    },
                    "purpose": {
                      "type": "string",
                      "description": "チャンネルの用途"
                    }
                  },
                  "required": ["name", "purpose"]
                }
              },
              "request_channels": {
                "type": "array",
                "items": {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string",
                      "description": "チャンネル名"
                    },
                    "description": {
                      "type": "string",
                      "description": "チャンネルの説明"
                    }
                  },
                  "required": ["name", "description"]
                }
              },
              "mentions": {
                "type": "array",
                "items": {
                  "type": "object",
                  "properties": {
                    "type": {
                      "type": "string",
                      "enum": ["user", "group", "role"],
                      "description": "メンションの種類"
                    },
                    "value": {
                      "type": "string",
                      "description": "メンションの値"
                    },
                    "description": {
                      "type": "string",
                      "description": "メンションの説明"
                    }
                  },
                  "required": ["type", "value", "description"]
                }
              }
            },
            "required": ["slack_channels", "request_channels", "mentions"]
          }
        },
        "required": ["id", "name", "type", "contact_info"]
      }
    }
  },
  "required": ["organizations"]
}
```

## 4. MCPプロトコル設計

### 4.1 ツール定義

#### 4.1.1 組織情報取得ツール
```json
{
  "name": "get_organizations",
  "description": "組織構造の情報を取得します",
  "schema": {
    "type": "object",
    "properties": {
      "type": {
        "type": "string",
        "enum": ["business_unit", "department", "team"],
        "description": "組織の種類"
      },
      "parent_id": {
        "type": "string",
        "description": "親組織のID"
      },
      "search": {
        "type": "string",
        "description": "組織名での検索"
      }
    }
  }
}
```

#### 4.1.2 組織詳細情報取得ツール
```json
{
  "name": "get_organization_details",
  "description": "特定の組織の詳細情報を取得します",
  "schema": {
    "type": "object",
    "properties": {
      "id": {
        "type": "string",
        "description": "組織のID"
      }
    },
    "required": ["id"]
  }
}
```

### 4.2 メッセージ形式

#### 4.2.1 ツール一覧取得リクエスト
```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "tools/list",
  "params": {}
}
```

#### 4.2.2 ツール一覧取得レスポンス
```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": [
    {
      "name": "get_organizations",
      "description": "組織構造の情報を取得します",
      "schema": {
        "type": "object",
        "properties": {
          "type": {
            "type": "string",
            "enum": ["business_unit", "department", "team"],
            "description": "組織の種類"
          },
          "parent_id": {
            "type": "string",
            "description": "親組織のID"
          },
          "search": {
            "type": "string",
            "description": "組織名での検索"
          }
        }
      }
    },
    {
      "name": "get_organization_details",
      "description": "特定の組織の詳細情報を取得します",
      "schema": {
        "type": "object",
        "properties": {
          "id": {
            "type": "string",
            "description": "組織のID"
          }
        },
        "required": ["id"]
      }
    }
  ]
}
```

#### 4.2.3 ツール呼び出しリクエスト
```json
{
  "jsonrpc": "2.0",
  "id": 2,
  "method": "tools/call",
  "params": {
    "name": "get_organizations",
    "arguments": {
      "type": "business_unit",
      "search": "エンジニアリング"
    }
  }
}
```

#### 4.2.4 ツール呼び出しレスポンス
```json
{
  "jsonrpc": "2.0",
  "id": 2,
  "result": {
    "organizations": [
      {
        "id": "string",
        "name": "string",
        "type": "string",
        "parent_id": "string",
        "description": "string",
        "contact_info": {
          "slack_channels": [...],
          "request_channels": [...],
          "mentions": [...]
        }
      }
    ]
  }
}
```

### 4.3 エラーレスポンス
```json
{
  "jsonrpc": "2.0",
  "id": 2,
  "error": {
    "code": -32603,
    "message": "Internal error",
    "data": {
      "details": "組織が見つかりませんでした"
    }
  }
}
```

## 5. 実装方針

### 5.1 技術スタック
- 言語: TypeScript
- MCP SDK: @modelcontextprotocol/sdk
  - Server: MCPサーバーの基本機能
  - StdioServerTransport: STDIN/STDOUT通信
  - Protocol: JSON-RPC 2.0メッセージ処理
- データ形式: JSON

### 5.2 実装の優先順位
1. データ管理機能の実装
   - JSONファイルの読み込み機能
   - データの検索・フィルタリング機能
   - エラーハンドリング

2. ツールの実装
   - `get_organizations`ツールの実装
   - `get_organization_details`ツールの実装
   - レスポンス形式の整形

3. MCPサーバーの統合
   - MCP SDKを使用したサーバー初期化
   - ツールの登録
   - エラーハンドリングの統合

### 5.3 テスト方針
- データ処理のテスト
  - JSONファイルの読み込みテスト
  - 検索・フィルタリング機能のテスト
- ツールの動作テスト
  - 各ツールの入力パラメータ検証
  - レスポンス形式の検証
- MCP SDKの統合テスト
  - ツール登録の検証
  - メッセージ処理の検証

### 5.4 実行方法
```bash
# 開発時
ts-node src/index.ts

# ビルド後
node dist/index.js
```

### 5.5 エラーハンドリング
- JSON-RPC 2.0のエラーコードに準拠
  - -32603: 内部エラー
  - -32602: 無効なパラメータ
  - -32601: メソッドが見つからない
- エラーメッセージは日本語で返却
- エラーの詳細情報は`data`フィールドに格納

### 5.6 コード構造
```
src/
├── index.ts              # エントリーポイント
│   ├── JSONデータの読み込み
│   ├── MCPサーバーの設定
│   └── ツールの実装
└── data/
    └── organizations.json  # 組織データ
```

### 5.7 実装のポイント
1. `index.ts`で完結
   - JSONファイルの読み込み
   - MCPサーバーの初期化
   - ツールの実装と登録
   - エラーハンドリング

2. データ管理
   - `organizations.json`を直接読み込む
   - メモリ上でデータを保持
   - シンプルな検索・フィルタリング

3. エラーハンドリング
   - JSONファイルの読み込みエラー
   - データ検索時のエラー
   - MCPプロトコル関連のエラー 