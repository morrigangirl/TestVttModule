// Hook into the 'ready' event
Hooks.on("ready", () => {
    console.log("MorriganGirl's Popup | Showing Hello Window");

    // Create and render the popup
    const helloPopup = new HelloPopup();
    helloPopup.render(true);
});

// Define a new FormApplication class for the popup
class HelloPopup extends FormApplication {
    // Default options for the popup
    static get defaultOptions() {
        return mergeObject(super.defaultOptions, {
            title: "Hello Popup", // Window title
            id: "hello-popup", // Unique ID for this application
            template: "modules/your-module/templates/hello-popup.html", // Template file (inline example below)
            width: 300, // Window width
            height: "auto", // Automatic height
            closeOnSubmit: false, // Prevent form from closing on submit
            resizable: false, // Disable resizing
        });
    }

    // Provide data to the Handlebars template
    getData() {
        return {
            message: "Hello, adventurer!", // The message to display
        };
    }

    // Handle form button clicks
    activateListeners(html) {
        super.activateListeners(html);
        html.find(".clear-button").click(() => {
            console.log("MorriganGirl's Popup | Clear button clicked");
            this.close(); // Close the popup
        });
    }
}