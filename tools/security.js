// /tools/security.js
const securityTools = [
    { 
        name: "Permission Auditor", 
        desc: "Scan which users have 'Admin' access to sensitive files.",
        run: () => render(`<h3>Admin Access Log</h3><ul style="text-align:left"><li>Alessa: FULL ACCESS</li><li>Guest_User: READ ONLY</li><li style="color:red">Unknown_IP: BLOCKED</li></ul>`)
    },
    { 
        name: "Password Strength Scorer", 
        desc: "Evaluate entropy and complexity of system passwords.",
        run: () => render(`<h3>Security Tester</h3><input type="password" oninput="this.nextSibling.innerHTML = 'Score: ' + (this.value.length * 10) + '%'" placeholder="Enter Test Password"><div>Score: 0%</div>`)
    },
    { 
        name: "GDPR Deletion Request", 
        desc: "Automate 'Right to be Forgotten' data removal.",
        run: () => render(`<h3>GDPR Portal</h3><input placeholder="User Email"><button onclick="alert('Queued for deletion')">Remove Data</button>`)
    },
    { 
        name: "Phishing Risk Simulator", 
        desc: "Mock-up of a security training email.",
        run: () => render(`<h3>Training Lab</h3><p style="background:#eee;padding:10px">From: Amazon-Security-Fake@scam.com<br>Subject: Update Password NOW</p><button>Report as Phish</button>`)
    },
    { 
        name: "SSL Expiry Tracker", 
        desc: "Monitor certificate health for your 100+ sites.",
        run: () => render(`<h3>SSL Monitor</h3><p>alessa-wellness.com: <b>Valid (280 days)</b><br>freight-tool.com: <b style="color:red">EXPIRES IN 2 DAYS</b></p>`)
    },
    { 
        name: "Geofence Login Alert", 
        desc: "Flag logins from outside Fort Lauderdale, FL.",
        run: () => render(`<h3>Location Guard</h3><p>Recent Login: Miami, FL (Trusted)<br><span style="color:red">Alert: Login from Kiev, Ukraine (BLOCKED)</span></p>`)
    },
    { 
        name: "File Integrity Checker", 
        desc: "Compare SHA-256 hashes to detect file tampering.",
        run: () => render(`<h3>Hash Validator</h3><p>Original: a1b2c3d4...<br>Current: a1b2c3d4...<br><b style="color:green">MATCH: FILE IS SAFE</b></p>`)
    },
    { 
        name: "HIPAA Access Logger", 
        desc: "Strict 'Write-Only' log for medical data access.",
        run: () => render(`<h3>Medical Data Log</h3><p>User_ID 88: Viewed Record #12<br>Timestamp: 2026-03-29 20:00:22</p>`)
    },
    { 
        name: "ToS Change Highlighter", 
        desc: "Compare versions of legal documents.",
        run: () => render(`<h3>Legal Diff</h3><p><del style="color:red">We sell your data.</del><br><ins style="color:green">We encrypt your data.</ins></p>`)
    },
    { 
        name: "Security Quiz Bot", 
        desc: "Daily micro-training for warehouse staff.",
        run: () => render(`<h3>Daily Quiz</h3><p>Should you share your login with a manager?</p><button>Yes</button> <button onclick="alert('Correct!')">No</button>`)
    }
];
