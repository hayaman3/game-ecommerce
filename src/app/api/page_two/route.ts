import { gameDataPageTwo } from "@/_data/gamesData";

export async function GET(request: Request) {
  return new Response(JSON.stringify(gameDataPageTwo));
}
