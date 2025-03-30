import { McpServer, ResourceTemplate } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
import { organizations } from './data/organizations.js';

// Create an MCP server
const server = new McpServer({
  name: "Company Organization MCP",
  version: "1.0.0"
});

// 組織情報取得ツール
server.tool(
  "get_organizations",
  "組織構造の情報を取得します",
  {
    type: z.enum(['business_unit', 'department', 'team']).optional(),
    parent_id: z.string().optional(),
    search: z.string().optional(),
  },
  async (args) => {
    let filtered = organizations.organizations;

    // 組織タイプでフィルタリング
    if (args.type) {
      filtered = filtered.filter((org) => org.type === args.type);
    }

    // 親組織IDでフィルタリング
    if (args.parent_id) {
      filtered = filtered.filter((org) => org.parent_id === args.parent_id);
    }

    // 組織名で検索
    if (args.search) {
      const searchLower = args.search.toLowerCase();
      filtered = filtered.filter((org) =>
        org.name.toLowerCase().includes(searchLower)
      );
    }

    // 連絡先情報を除外した組織情報を返す
    const organizationsWithoutContactInfo = filtered.map(({ contact_info, ...org }) => org);

    return {
      content: [{ type: "text", text: JSON.stringify({ organizations: organizationsWithoutContactInfo }, null, 2) }]
    };
  }
);

// 組織詳細情報取得ツール
server.tool(
  "get_organization_details",
  "特定の組織の詳細情報を取得します",
  {
    id: z.string(),
  },
  async (args) => {
    const organization = organizations.organizations.find(
      (org) => org.id === args.id
    );

    if (!organization) {
      throw new Error(`組織が見つかりませんでした: ${args.id}`);
    }

    return {
      content: [{ type: "text", text: JSON.stringify({ organization }, null, 2) }]
    };
  }
);

// Start receiving messages on stdin and sending messages on stdout
const transport = new StdioServerTransport();
await server.connect(transport);