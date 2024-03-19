import React from 'react';
import DynamicCard from './DynamicCard';

const Dashboard = () => {
  return (
    <div style={{ backgroundColor: "#F9FAFB", padding: "32px" }}>
      <div style={{ marginBottom: "24px", marginTop: "-50px" }}>
        <h5
          style={{
            fontSize: "2rem",
            fontWeight: "bold",
            marginBottom: "-10px",
            color: "#1F2937",
            fontFamily: "Inter",
          }}
        >
          Dashboard
        </h5>
        <p style={{ fontSize: "0.875rem", color: "#666" }}>
          Check your data at a glance
        </p>
      </div>

      <div style={{ display: "flex", gridTemplateColumns: "1fr", gap: "1rem", marginBottom: "32px" }}>
        <DynamicCard 
          title="Total Members"
          total={152}
          members="members"
          vsLastWeek="5%"
          imageSrc="https://i.imgur.com/8KAtD5I.png"
        />
        <DynamicCard 
          title="Total Members"
          total={152}
          members="members"
          vsLastWeek="5%"
          imageSrc="https://i.imgur.com/8KAtD5I.png"
        />
        <DynamicCard 
          title="Total Members"
          total={152}
          members="members"
          vsLastWeek="5%"
          imageSrc="https://i.imgur.com/8KAtD5I.png"
        />
        <DynamicCard 
          title="Total Members"
          total={152}
          members="members"
          vsLastWeek="5%"
          imageSrc="https://i.imgur.com/8KAtD5I.png"
        />
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "16px" }}>
          
        </div>
      </div>

      <div style={{ marginBottom: "16px" }}>
        <h2 style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: "16px" }}>Quick Actions</h2>
        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "1rem" }}>
          <div style={{ display: "flex", alignItems: "center", padding: "16px" }}>
            <div style={{ color: "#888", marginRight: "8px" }}>Platform Settings</div>
            <div>
              <div style={{ fontWeight: "bold" }}>Platform Settings</div>
              <div style={{ fontSize: "0.875rem", color: "#888" }}>View and quickly edit your platform</div>
            </div>
            <div style={{ color: "#888", marginLeft: "auto" }}>→</div>
          </div>
          <div style={{ display: "flex", alignItems: "center", padding: "16px" }}>
            <div style={{ color: "#888", marginRight: "8px" }}>View analytics</div>
            <div>
              <div style={{ fontWeight: "bold" }}>View analytics</div>
              <div style={{ fontSize: "0.875rem", color: "#888" }}>View and analyze your data</div>
            </div>
            <div style={{ color: "#888", marginLeft: "auto" }}>→</div>
          </div>
          <div style={{ display: "flex", alignItems: "center", padding: "16px" }}>
            <div style={{ color: "#888", marginRight: "8px" }}>Member Management</div>
            <div>
              <div style={{ fontWeight: "bold" }}>Member Management</div>
              <div style={{ fontSize: "0.875rem", color: "#888" }}>View, edit, and manage all of your members</div>
            </div>
            <div style={{ color: "#888", marginLeft: "auto" }}>→</div>
          </div>
          <div style={{ display: "flex", alignItems: "center", padding: "16px" }}>
            <div style={{ color: "#888", marginRight: "8px" }}>Manage posts</div>
            <div>
              <div style={{ fontWeight: "bold" }}>Manage posts</div>
              <div style={{ fontSize: "0.875rem", color: "#888" }}>Add, view, and manage posts.</div>
            </div>
            <div style={{ color: "#888", marginLeft: "auto" }}>→</div>
          </div>
        </div>
      </div>

      <div style={{ position: "absolute", top: "16px", right: "16px" }}>
        <div style={{ backgroundColor: "#E5E7EB", color: "#374151", padding: "4px 12px", borderRadius: "4px" }}>
          New
        </div>
      </div>
    </div>
  );
};

export default Dashboard;