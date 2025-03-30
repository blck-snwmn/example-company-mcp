import { OrganizationsSchema, type Organizations } from '../types.js';

export const organizationsData: Organizations = {
  organizations: [
    {
      id: "executive",
      name: "経営陣",
      type: "business_unit",
      description: "会社の経営方針の決定と全体の統括を担当します",
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
      description: "会社の技術基盤と製品開発を担当する事業部です",
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
      id: "product",
      name: "プロダクト事業部",
      type: "business_unit",
      description: "製品の企画、設計、マーケティングを担当する事業部です",
      contact_info: {
        slack_channels: [
          {
            name: "product-general",
            purpose: "プロダクト事業部の一般連絡用"
          }
        ],
        request_channels: [
          {
            name: "product-requests",
            description: "プロダクト事業部への依頼用チャンネル"
          }
        ],
        mentions: [
          {
            type: "group",
            value: "@product-team",
            description: "プロダクト事業部全員へのメンション"
          }
        ]
      }
    },
    {
      id: "hr",
      name: "人事部",
      type: "department",
      description: "採用、育成、評価、福利厚生など、人材に関する業務を担当します",
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
      description: "経理、財務、資金調達など、財務に関する業務を担当します",
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
    },
    {
      id: "legal",
      name: "法務部",
      type: "department",
      description: "法務、コンプライアンス、契約管理など、法的な業務を担当します",
      contact_info: {
        slack_channels: [
          {
            name: "legal-general",
            purpose: "法務部の一般連絡用"
          }
        ],
        request_channels: [
          {
            name: "legal-requests",
            description: "法務部への依頼用チャンネル"
          }
        ],
        mentions: [
          {
            type: "group",
            value: "@legal-team",
            description: "法務部全員へのメンション"
          }
        ]
      }
    },
    {
      id: "frontend",
      name: "フロントエンドチーム",
      type: "team",
      parent_id: "tech",
      description: "Webアプリケーションのフロントエンド開発を担当するチーム",
      contact_info: {
        slack_channels: [
          {
            name: "frontend-dev",
            purpose: "フロントエンド開発の議論用"
          }
        ],
        request_channels: [
          {
            name: "frontend-requests",
            description: "フロントエンドチームへの依頼用チャンネル"
          }
        ],
        mentions: [
          {
            type: "group",
            value: "@frontend-team",
            description: "フロントエンドチーム全員へのメンション"
          }
        ]
      }
    },
    {
      id: "backend",
      name: "バックエンドチーム",
      type: "team",
      parent_id: "tech",
      description: "サーバーサイドの開発とインフラストラクチャを担当するチーム",
      contact_info: {
        slack_channels: [
          {
            name: "backend-dev",
            purpose: "バックエンド開発の議論用"
          }
        ],
        request_channels: [
          {
            name: "backend-requests",
            description: "バックエンドチームへの依頼用チャンネル"
          }
        ],
        mentions: [
          {
            type: "group",
            value: "@backend-team",
            description: "バックエンドチーム全員へのメンション"
          }
        ]
      }
    },
    {
      id: "qa",
      name: "QAチーム",
      type: "team",
      parent_id: "tech",
      description: "品質保証とテストを担当するチーム",
      contact_info: {
        slack_channels: [
          {
            name: "qa-general",
            purpose: "QAチームの一般連絡用"
          }
        ],
        request_channels: [
          {
            name: "qa-requests",
            description: "QAチームへの依頼用チャンネル"
          }
        ],
        mentions: [
          {
            type: "group",
            value: "@qa-team",
            description: "QAチーム全員へのメンション"
          }
        ]
      }
    },
    {
      id: "product-design",
      name: "プロダクトデザインチーム",
      type: "team",
      parent_id: "product",
      description: "UI/UXデザインとプロダクトの企画を担当するチーム",
      contact_info: {
        slack_channels: [
          {
            name: "design-general",
            purpose: "デザインチームの一般連絡用"
          }
        ],
        request_channels: [
          {
            name: "design-requests",
            description: "デザインチームへの依頼用チャンネル"
          }
        ],
        mentions: [
          {
            type: "group",
            value: "@design-team",
            description: "デザインチーム全員へのメンション"
          }
        ]
      }
    },
    {
      id: "marketing",
      name: "マーケティングチーム",
      type: "team",
      parent_id: "product",
      description: "製品のマーケティングとプロモーションを担当するチーム",
      contact_info: {
        slack_channels: [
          {
            name: "marketing-general",
            purpose: "マーケティングチームの一般連絡用"
          }
        ],
        request_channels: [
          {
            name: "marketing-requests",
            description: "マーケティングチームへの依頼用チャンネル"
          }
        ],
        mentions: [
          {
            type: "group",
            value: "@marketing-team",
            description: "マーケティングチーム全員へのメンション"
          }
        ]
      }
    }
  ]
};

// データの検証
export const organizations = OrganizationsSchema.parse(organizationsData); 