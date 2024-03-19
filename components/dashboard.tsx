export default function Component() {
  return (
    <div style={{ backgroundColor: "#F9FAFB", padding: "32px" }}>
      <div style={{ marginBottom: "24px" }}>
        <h1
          style={{
            fontSize: "2rem",
            fontWeight: "bold",
            marginBottom: "-10px",
            color: "#1F2937",
            fontFamily: "Inter",
          }}
        >
          Dashboard
        </h1>
        <p style={{ fontSize: "0.875rem", color: "#666" }}>
          Check your data at a glance
        </p>
      </div>
      <div
        style={{
          display: "flex",
          gridTemplateColumns: "1fr",
          gap: "1rem",
          marginBottom: "32px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            padding: "16px",
            fontSize: "2rem",
            fontWeight: "bold",
            width: "250px",
            height: "auto",
            backgroundColor: "#FFFFFF",
            padding: "10px",
            border: "1px solid #D1D5DB",
            borderRadius: "5px",
            color: "#1F2937",
            fontFamily: "Inter",
          }}
        >
          <div style={{ color: "#888", marginBottom: "8px" }}>
            <img
              src="https://i.imgur.com/8KAtD5I.png"
              style={{
                width: "20%",
                height: "auto",
              }}
            />
          </div>
          <div style={{ fontSize: "14px", color: "#475367", fontFamily: "Inter", fontWeight: "500", paddingBottom: "5px" }}>
            Total Members
          </div>
          <div style={{ fontSize: "1.25rem", fontWeight: "bold" }}>
            152 members
          </div>
          <div style={{ fontSize: "0.875rem", color: "#888" }}>
            5% vs. last week
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "16px",
          }}
        >
          <div style={{ color: "#888", marginBottom: "8px" }}>+24 members</div>
          <div style={{ fontSize: "1.25rem", fontWeight: "bold" }}>
            +24 members
          </div>
          <div style={{ fontSize: "0.875rem", color: "#888" }}>
            5% vs. last week
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "16px",
          }}
        >
          <div style={{ color: "#888", marginBottom: "8px" }}>+131 posts</div>
          <div style={{ fontSize: "1.25rem", fontWeight: "bold" }}>
            +131 posts
          </div>
          <div style={{ fontSize: "0.875rem", color: "#888" }}>
            5% vs. yesterday
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "16px",
          }}
        >
          <div style={{ color: "#888", marginBottom: "8px" }}>+12%</div>
          <div style={{ fontSize: "1.25rem", fontWeight: "bold" }}>+12%</div>
          <div style={{ fontSize: "0.875rem", color: "#888" }}>
            5% vs. last week
          </div>
        </div>
      </div>
      <div style={{ marginBottom: "16px" }}>
        <h2
          style={{
            fontSize: "1.5rem",
            fontWeight: "bold",
            marginBottom: "16px",
          }}
        >
          Quick Actions
        </h2>
        <div
          style={{ display: "grid", gridTemplateColumns: "1fr", gap: "1rem" }}
        >
          <div
            style={{ display: "flex", alignItems: "center", padding: "16px" }}
          >
            <div style={{ color: "#888", marginRight: "8px" }}>
              Platform Settings
            </div>
            <div>
              <div style={{ fontWeight: "bold" }}>Platform Settings</div>
              <div style={{ fontSize: "0.875rem", color: "#888" }}>
                View and quickly edit your platform
              </div>
            </div>
            <div style={{ color: "#888", marginLeft: "auto" }}>→</div>
          </div>
          <div
            style={{ display: "flex", alignItems: "center", padding: "16px" }}
          >
            <div style={{ color: "#888", marginRight: "8px" }}>
              View analytics
            </div>
            <div>
              <div style={{ fontWeight: "bold" }}>View analytics</div>
              <div style={{ fontSize: "0.875rem", color: "#888" }}>
                View and analyze your data
              </div>
            </div>
            <div style={{ color: "#888", marginLeft: "auto" }}>→</div>
          </div>
          <div
            style={{ display: "flex", alignItems: "center", padding: "16px" }}
          >
            <div style={{ color: "#888", marginRight: "8px" }}>
              Member Management
            </div>
            <div>
              <div style={{ fontWeight: "bold" }}>Member Management</div>
              <div style={{ fontSize: "0.875rem", color: "#888" }}>
                View, edit, and manage all of your members
              </div>
            </div>
            <div style={{ color: "#888", marginLeft: "auto" }}>→</div>
          </div>
          <div
            style={{ display: "flex", alignItems: "center", padding: "16px" }}
          >
            <div style={{ color: "#888", marginRight: "8px" }}>
              Manage posts
            </div>
            <div>
              <div style={{ fontWeight: "bold" }}>Manage posts</div>
              <div style={{ fontSize: "0.875rem", color: "#888" }}>
                Add, view, and manage posts.
              </div>
            </div>
            <div style={{ color: "#888", marginLeft: "auto" }}>→</div>
          </div>
        </div>
      </div>
      <div style={{ position: "absolute", top: "16px", right: "16px" }}>
        <div
          style={{
            backgroundColor: "#E5E7EB",
            color: "#374151",
            padding: "4px 12px",
            borderRadius: "4px",
          }}
        >
          New
        </div>
      </div>
    </div>
  );
}
