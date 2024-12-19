import { formatDate } from "./utils/helper.ts";

function main() {
    console.log("Deno project initialized.");
    const currentDate = new Date();
    console.log(`Current date: ${formatDate(currentDate)}`);
}

main();