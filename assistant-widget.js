import("https://widget.mintlify.com/v1/embed.js")
  .then(() =>
    window.MintlifyAssistant.init({
      id: "mint_widget_762fe734-ba0e-484e-aa8b-a724be7936d4",
    }),
  )
  .catch((error) => {
    console.error("Failed to initialize the Mintlify assistant widget:", error);
  });
