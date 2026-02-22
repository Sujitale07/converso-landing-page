export const docsData = [
    {
        category: "Getting Started",
        items: [
            {
                title: "Installation",
                slug: "installation",
                content: `
                    <h2>Installing Connectapre</h2>
                    <p>Connectapre is designed to be up and running in minutes. Follow these simple steps to install the plugin on your WordPress site.</p>
                    <h3>Method 1: WordPress Dashboard</h3>
                    <ul>
                        <li>Log in to your WordPress admin panel.</li>
                        <li>Navigate to <strong>Plugins > Add New</strong>.</li>
                        <li>Search for "Connectapre".</li>
                        <li>Click <strong>Install Now</strong> and then <strong>Activate</strong>.</li>
                    </ul>
                    <h3>Method 2: Manual Upload</h3>
                    <p>If you downloaded the plugin ZIP file from our website or WordPress.org:</p>
                    <ul>
                        <li>Go to <strong>Plugins > Add New</strong>.</li>
                        <li>Click <strong>Upload Plugin</strong> at the top.</li>
                        <li>Choose the <code>connectapre.zip</code> file.</li>
                        <li>Click <strong>Install Now</strong> and then <strong>Activate</strong>.</li>
                    </ul>
                    <blockquote>
                        <strong>Pro Tip:</strong> Ensure you have the latest version of WordPress installed for the best compatibility and security.
                    </blockquote>
                `
            },
            {
                title: "Basic Configuration",
                slug: "basic-configuration",
                content: `
                    <h2>Basic Configuration</h2>
                    <p>Once activated, you'll see a new "Connectapre" menu in your WordPress sidebar. Follow these steps to set up your first widget.</p>
                    <h3>1. Adding Agents</h3>
                    <p>Before the widget can work, you need at least one agent. Go to <strong>Connectapre > Agents</strong> to add your team members.</p>
                    <ul>
                        <li><strong>Name:</strong> The name displayed to users.</li>
                        <li><strong>Phone Number:</strong> The WhatsApp number in international format (e.g., +1234567890).</li>
                        <li><strong>Role/Label:</strong> A short description (e.g., "Sales Support").</li>
                    </ul>
                    <h3>2. Customizing the Button</h3>
                    <p>Navigate to <strong>Settings > Button</strong> to customize the look and feel of your chat trigger.</p>
                `
            }
        ]
    },
    {
        category: "Advanced Features",
        items: [
            {
                title: "Smart Routing",
                slug: "smart-routing",
                content: `
                    <h2>Smart Routing Logic</h2>
                    <p>One of Connectapre's most powerful features is its ability to route users to specific agents based on their geographical location.</p>
                    <h3>How it Works</h3>
                    <p>Connectapre uses the visitor's IP address to detect their location. You can then assign agents to specific regions.</p>
                    <ul>
                        <li><strong>Global Agents:</strong> Shown to everyone.</li>
                        <li><strong>Regional Agents:</strong> Shown only to users in a specific Country, State, or City.</li>
                    </ul>
                    <h3>Setting up a Route</h3>
                    <p>Go to <strong>Connectapre > Routing Rules</strong> and click <strong>Add New Rule</strong>. Select your target area and the agent you wish to assign.</p>
                `
            },
            {
                title: "Analytics & Tracking",
                slug: "analytics-tracking",
                content: `
                    <h2>Tracking Performance</h2>
                    <p>Connectapre automatically tracks Every interaction. You can view these stats in <strong>Connectapre > Analytics</strong>.</p>
                    <h3>Key Metrics</h3>
                    <ul>
                        <li><strong>Total Clicks:</strong> Number of times the widget was opened.</li>
                        <li><strong>Agent Performance:</strong> Which agents are getting the most chats.</li>
                        <li><strong>Top Pages:</strong> Which pages on your site trigger the most inquiries.</li>
                    </ul>
                    <h3>Google Analytics Integration</h3>
                    <p>If you have Google Analytics installed, Connectapre will automatically send "whatsapp_click" events so you can track conversions in GA4.</p>
                `
            }
        ]
    }
];
