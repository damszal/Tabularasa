import { createClient, OAuthStrategy } from "@wix/sdk";
import { items } from "@wix/data";

const WixClient = createClient({
    modules: { items},
    auth: OAuthStrategy({
        clientId: import.meta.env.WIX_CLIENT_SECRET,
    }), 
})

export default async function fetchArticles() {
    let query = WixClient.items.queryDataItems({
        dataCollectionId: "examples",
    });
    const articles = await query.find()
    return articles.items
}
  
  