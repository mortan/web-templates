({
    //appDir: ".",
    baseUrl: "./",
    mainConfigFile: "app.js",
    name: "app",
    out: "app.min.js",
    //optimize: "none",
    preserveLicenseComments: false,
    paths: {
        requireLib: 'lib/require'
    },
    include: 'requireLib'
})
