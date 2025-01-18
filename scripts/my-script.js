// Hook into Foundry's "ready" event
Hooks.on("ready", () => {
    console.log("MorriganGirl's Chat Popper | Module is ready!");

    // Hook into the rendering of the Chat Log sidebar
    Hooks.on("renderChatLog", (app, html) => {
        // Add a custom button to the Chat Log footer
        const button = $(`
            <button class="chat-popper-button">
                <i class="fas fa-bullhorn"></i> Pop a Message
            </button>
        `);

        // Append the button to the Chat Log footer
        html.find(".directory-footer").append(button);

        // Add click event listener to the button
        button.on("click", () => {
            popChatMessage();
        });
    });
});

// Function to send a chat message
function popChatMessage() {
    // Content of the chat message
    const content = `
        <p><strong>📢 GM Announcement:</strong> Hello, adventurers! This is a broadcast from MorriganGirl's Chat Popper.</p>
    `;

    // Create and send the chat message
    ChatMessage.create({
        content: content,
        whisper: [], // Sends to all players
        speaker: {
            alias: "MorriganGirl's Chat Popper"
        }
    });

    console.log("MorriganGirl's Chat Popper | Message sent to chat.");
}