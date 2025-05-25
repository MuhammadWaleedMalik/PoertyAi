import React, { useState } from "react";
import { useGroq } from "../hooks/useGroq"; // Update path as per your structure

export default function Name() {
    const [input, setInput] = useState("");
    const { fetchGroqResponse, response, loading, error } = useGroq();

    const handleSearch = () => {
        if (input.trim() === "") return;
        fetchGroqResponse("Give me Poetry based on this,", input);
    };

    const parsedNames = response
        .split(/[\n,]+/)
        .map((name) => name.trim())
        .filter((name) => name.length > 0);

    return (
        <div
            style={{
                minHeight: "100vh",
                background: "linear-gradient(135deg, #0f2027, #2c5364 80%)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "'Poppins', 'Montserrat', 'Segoe UI', sans-serif",
                padding: "2rem",
                textAlign: "center"
            }}
        >
            <h1
                style={{
                    color: "#fff",
                    fontSize: "3rem",
                    letterSpacing: "0.2em",
                    textShadow: "0 4px 24px #000a, 0 1px 0 #fff4",
                    marginBottom: "2rem",
                }}
            >
                🔥 Find Your Stylish Name 🔥
            </h1>

            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type a theme for Poetry..."
                style={{
                    padding: "1rem 2rem",
                    borderRadius: "2rem",
                    border: "none",
                    fontSize: "1.5rem",
                    boxShadow: "0 4px 32px #0004",
                    outline: "none",
                    marginBottom: "1rem",
                    background: "rgba(255,255,255,0.15)",
                    color: "#fff",
                }}
            />

            <button
                onClick={handleSearch}
                style={{
                    padding: "0.75rem 2rem",
                    borderRadius: "2rem",
                    border: "none",
                    background: "linear-gradient(to right, #ff416c, #ff4b2b)",
                    color: "#fff",
                    fontSize: "1.2rem",
                    fontWeight: "bold",
                    boxShadow: "0 4px 24px #ff416c88",
                    cursor: "pointer",
                    marginBottom: "2rem",
                }}
                disabled={loading}
            >
                {loading ? "Generating..." : "Generate Quotes"}
            </button>

            {error && (
                <div style={{ color: "#ff6f91", marginBottom: "1rem" }}>
                    {error}
                </div>
            )}

            <div
                style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "1.5rem",
                    justifyContent: "center",
                    maxWidth: "700px",
                }}
            >
                {!loading && parsedNames.map((name, index) => (
                    <span
                        key={index}
                        style={{
                            background:
                                "linear-gradient(90deg, #43cea2 0%, #185a9d 100%)",
                            color: "#fff",
                            fontSize: "1.5rem",
                            fontWeight: 600,
                            padding: "0.75rem 1.5rem",
                            borderRadius: "2rem",
                            boxShadow: "0 4px 24px #185a9d44",
                            letterSpacing: "0.15em",
                            textShadow: "0 2px 8px #0006",
                        }}
                    >
                        {name}
                    </span>
                ))}
            </div>
        </div>
    );
}
