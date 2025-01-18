// Hook into Foundry's ready event
Hooks.on("ready", () => {
    console.log("MorriganGirl's Chat Popper | Module is ready!");

    // Hook into rendering the Chat Log sidebar
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

// Function to send a message to the chat
function popChatMessage() {
    // Content of the chat message
    const content = `
        <p><strong>📢 GM Announcement:</strong> Hello, adventurers! This is a broadcast from MorriganGirl's Chat Popper.</p>
    `;

    // Send the message to the chat, visible to all players
    ChatMessage.create({
        content: content,
        whisper: [], // Empty array ensures all players see the message
        speaker: {
            alias: "MorriganGirl's Chat Popper"
        }
    });

    console.log("MorriganGirl's Chat Popper | Message sent to chat.");
}