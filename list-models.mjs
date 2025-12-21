// Run this with: node list-models.mjs YOUR_API_KEY
const apiKey = process.argv[2];

if (!apiKey) {
    console.error("Please provide your API key: node list-models.mjs <API_KEY>");
    process.exit(1);
}

async function listModels() {
    try {
        const url = `https://generativelanguage.googleapis.com/v1beta/models?key=${apiKey}`;
        const response = await fetch(url);
        const data = await response.json();

        if (data.error) {
            console.error("API Error:", data.error.message);
            return;
        }

        console.log("Available Models:");
        data.models.forEach((m) => {
            // Clean up the name (remove 'models/')
            const shortName = m.name.replace('models/', '');
            console.log(`- ${shortName} (Supports: ${m.supportedGenerationMethods.join(', ')})`);
        });
    } catch (error) {
        console.error("Error fetching models:", error);
    }
}

listModels();
