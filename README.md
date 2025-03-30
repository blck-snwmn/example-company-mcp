# 会社組織情報MCP (Proof of Concept)

このプロジェクトは、会社の組織構造に関する情報をMCP（Message Control Protocol）を通じて提供するためのPoC（Proof of Concept）実装です。

## 概要

このMCPツールは、会社の組織構造に関する情報を一元管理し、必要な情報を効率的に取得するためのインターフェースを提供します。

### 主な機能

1. 組織構造の情報取得
   - 組織の種類（事業部、部署、チーム）によるフィルタリング
   - 親組織IDによる階層構造の取得
   - 組織名による検索

2. 組織詳細情報の取得
   - 組織IDによる詳細情報の取得
   - 連絡先情報（Slackチャンネル、依頼チャンネル、メンション）の取得

## 技術スタック

- TypeScript
- [@modelcontextprotocol/sdk](https://github.com/modelcontextprotocol/sdk)
- [Zod](https://zod.dev/) (型検証)

## 注意事項

このプロジェクトはPoCとして実装されており、以下の制限があります：

- 組織データは静的に定義されており、実行時に変更不可
- データの永続化機能なし
- 認証・認可機能なし
- エラーハンドリングは最小限

## インストールとビルド

```bash
pnpm install
pnpm build
```

## 利用可能なツール

### get_organizations

組織構造の情報を取得します。

#### パラメータ

なし

#### レスポンス例

```json
{
  "organizations": [
    {
      "id": "tech",
      "name": "テクノロジー事業部",
      "type": "business_unit",
      "description": "会社の技術基盤と製品開発を担当する事業部です"
    }
  ]
}
```

### get_organization_details

特定の組織の詳細情報を取得します。連絡先情報を含みます。

#### パラメータ

- `id`: 組織のID

#### レスポンス例

```json
{
  "organization": {
    "id": "tech",
    "name": "テクノロジー事業部",
    "type": "business_unit",
    "description": "会社の技術基盤と製品開発を担当する事業部です",
    "contact_info": {
      "slack_channels": [...],
      "request_channels": [...],
      "mentions": [...]
    }
  }
}
```

## 今後の展望

このPoCを基に、以下の機能の追加を検討しています：

- データの動的更新機能
- データベースとの連携
- 認証・認可機能の実装
- エラーハンドリングの強化
- テストの追加
- ドキュメントの充実

## ライセンス

ISC
