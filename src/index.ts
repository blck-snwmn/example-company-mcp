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
  {},
  async () => {
    // 連絡先情報を除外した組織情報を返す
    const organizationsWithoutContactInfo = organizations.organizations.map(({ contact_info, ...org }) => org);

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