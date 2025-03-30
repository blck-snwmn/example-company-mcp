import { OrganizationsSchema, type Organizations } from '../types.js';

export const organizationsData: Organizations = {
  organizations: [
    {
      id: "executive",
      name: "経営陣",
      type: "business_unit",
      description: "会社の経営方針の決定と全体の統括を担当します。経営判断が必要な重要事項の相談、会社全体の戦略立案、大規模な投資やリソース配分の決定、経営陣への直接報告が必要な重要案件について、最終的な判断を行います。",
      contact_info: {
        slack_channels: [
          {
            name: "executive-general",
            purpose: "経営陣の一般連絡用"
          }
        ],
        request_channels: [
          {
            name: "executive-requests",
            description: "経営陣への依頼用チャンネル"
          }
        ],
        mentions: [
          {
            type: "group",
            value: "@executive-team",
            description: "経営陣全員へのメンション"
          }
        ]
      }
    },
    {
      id: "tech",
      name: "テクノロジー事業部",
      type: "business_unit",
      description: "会社の技術基盤と製品開発を担当する事業部です。技術戦略の立案と実行、製品開発の全体管理、技術スタックの選定と標準化、技術的な意思決定の判断、各製品チーム間の調整を行い、会社全体の技術力向上を推進します。",
      contact_info: {
        slack_channels: [
          {
            name: "tech-general",
            purpose: "テクノロジー事業部の一般連絡用"
          }
        ],
        request_channels: [
          {
            name: "tech-requests",
            description: "テクノロジー事業部への依頼用チャンネル"
          }
        ],
        mentions: [
          {
            type: "group",
            value: "@tech-team",
            description: "テクノロジー事業部全員へのメンション"
          }
        ]
      }
    },
    {
      id: "cloudmaster-dev",
      name: "CloudMaster開発チーム",
      type: "team",
      parent_id: "tech",
      description: "社内メンバー向けのCloudMaster管理システムの開発・保守を担当するチームです。社内システムの新機能開発、既存機能の改善・最適化、システム障害の対応、セキュリティ対策の実装、ユーザー権限管理の設定、システム利用方法の説明、パフォーマンス改善、データバックアップ・リストア、システム監視・ログ分析を通じて、社内の業務効率化と管理機能の提供を行っています。",
      contact_info: {
        slack_channels: [
          {
            name: "cloudmaster-dev",
            purpose: "CloudMasterの開発議論用"
          }
        ],
        request_channels: [
          {
            name: "cloudmaster-requests",
            description: "CloudMaster開発チームへの依頼用チャンネル"
          }
        ],
        mentions: [
          {
            type: "group",
            value: "@cloudmaster-team",
            description: "CloudMaster開発チーム全員へのメンション"
          }
        ]
      }
    },
    {
      id: "analyticsflow-sales",
      name: "AnalyticsFlow営業チーム",
      type: "team",
      parent_id: "tech",
      description: "AnalyticsFlowの営業活動を担当するチームです。新規顧客開拓、既存顧客の拡販、提案書・見積書の作成、商談のアレンジ、製品デモの実施、価格交渉、契約書の作成、導入スケジュールの調整、競合分析、市場調査を通じて、大企業向けのデータ分析ソリューションの導入を推進しています。",
      contact_info: {
        slack_channels: [
          {
            name: "analyticsflow-sales-general",
            purpose: "AnalyticsFlow営業の一般連絡用"
          }
        ],
        request_channels: [
          {
            name: "analyticsflow-sales-requests",
            description: "AnalyticsFlow営業チームへの依頼用チャンネル"
          }
        ],
        mentions: [
          {
            type: "group",
            value: "@analyticsflow-sales-team",
            description: "AnalyticsFlow営業チーム全員へのメンション"
          }
        ]
      }
    },
    {
      id: "analyticsflow-support",
      name: "AnalyticsFlowサポートチーム",
      type: "team",
      parent_id: "tech",
      description: "AnalyticsFlowの導入企業向けサポートを担当するチームです。技術的な質問対応、トラブルシューティング、バグ修正、セキュリティインシデント対応、パフォーマンス改善、データ移行支援、システム設定の調整、バックアップ・リストア、監視設定の調整、障害報告書の作成を通じて、導入企業のシステム運用をサポートしています。",
      contact_info: {
        slack_channels: [
          {
            name: "analyticsflow-support-general",
            purpose: "AnalyticsFlowサポートの一般連絡用"
          }
        ],
        request_channels: [
          {
            name: "analyticsflow-support-requests",
            description: "AnalyticsFlowサポートチームへの依頼用チャンネル"
          }
        ],
        mentions: [
          {
            type: "group",
            value: "@analyticsflow-support-team",
            description: "AnalyticsFlowサポートチーム全員へのメンション"
          }
        ]
      }
    },
    {
      id: "analyticsflow-success",
      name: "AnalyticsFlowサクセステーム",
      type: "team",
      parent_id: "tech",
      description: "AnalyticsFlowの導入企業の成功を支援するチームです。データ分析の活用促進、ユーザートレーニング、ベストプラクティスの共有、利用状況の分析、成功事例の収集、改善提案の作成、定期的なレビュー、導入効果の測定、継続的な価値提供、ユーザーコミュニティの運営を通じて、導入企業のデータ分析活用をサポートしています。",
      contact_info: {
        slack_channels: [
          {
            name: "analyticsflow-success-general",
            purpose: "AnalyticsFlowサクセスの一般連絡用"
          }
        ],
        request_channels: [
          {
            name: "analyticsflow-success-requests",
            description: "AnalyticsFlowサクセステームへの依頼用チャンネル"
          }
        ],
        mentions: [
          {
            type: "group",
            value: "@analyticsflow-success-team",
            description: "AnalyticsFlowサクセステーム全員へのメンション"
          }
        ]
      }
    },
    {
      id: "marketinghub-dev",
      name: "MarketingHub開発チーム",
      type: "team",
      parent_id: "tech",
      description: "一般ユーザー向けのMarketingHubサービスの開発を担当するチームです。新機能の開発、UI/UXの改善、パフォーマンス最適化、バグ修正、セキュリティ対策、モバイル対応、アクセシビリティ対応、多言語対応、APIの拡張、分析機能の強化を通じて、ユーザー体験の向上とマーケティング自動化の実現を目指しています。",
      contact_info: {
        slack_channels: [
          {
            name: "marketinghub-dev",
            purpose: "MarketingHubの開発議論用"
          }
        ],
        request_channels: [
          {
            name: "marketinghub-requests",
            description: "MarketingHub開発チームへの依頼用チャンネル"
          }
        ],
        mentions: [
          {
            type: "group",
            value: "@marketinghub-team",
            description: "MarketingHub開発チーム全員へのメンション"
          }
        ]
      }
    },
    {
      id: "hr",
      name: "人事部",
      type: "department",
      description: "採用、育成、評価、福利厚生など、人材に関する業務を担当します。採用活動、新入社員研修、スキル開発支援、評価制度の運用、給与・賞与の管理、福利厚生の手続き、人事異動、キャリア相談、ハラスメント対応、労働環境の改善を通じて、会社の人材育成と組織開発を推進しています。",
      contact_info: {
        slack_channels: [
          {
            name: "hr-general",
            purpose: "人事部の一般連絡用"
          }
        ],
        request_channels: [
          {
            name: "hr-requests",
            description: "人事部への依頼用チャンネル"
          }
        ],
        mentions: [
          {
            type: "group",
            value: "@hr-team",
            description: "人事部全員へのメンション"
          }
        ]
      }
    },
    {
      id: "finance",
      name: "財務部",
      type: "department",
      description: "経理、財務、資金調達など、財務に関する業務を担当します。経費精算、予算管理、決算業務、資金調達、投資判断、税務対応、財務報告、コスト管理、財務分析、リスク管理を通じて、会社の財務基盤の確立と持続的な成長を支援しています。",
      contact_info: {
        slack_channels: [
          {
            name: "finance-general",
            purpose: "財務部の一般連絡用"
          }
        ],
        request_channels: [
          {
            name: "finance-requests",
            description: "財務部への依頼用チャンネル"
          }
        ],
        mentions: [
          {
            type: "group",
            value: "@finance-team",
            description: "財務部全員へのメンション"
          }
        ]
      }
    }
  ]
};

// データの検証
export const organizations = OrganizationsSchema.parse(organizationsData); 