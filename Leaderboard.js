class Leaderboard {
    constructor(capacity = 5) {
        this.capacity = capacity;
        // Native JavaScript array acting as our contiguous structure
        this.scores = [];
    }

    addScore(playerName, score) {
        const entry = { playerName, score };

        // If capacity is not reached, or if the new score beats the lowest score on the board
        if (this.scores.length < this.capacity) {
            this.scores.push(entry);
        } else if (score > this.scores[this.scores.length - 1].score) {
            this.scores[this.scores.length - 1] = entry;
        } else {
            return; // Score is too low to make the leaderboard
        }

        // Sort descending by score
        this.scores.sort((a, b) => b.score - a.score);
    }

    printLeaderboard() {
        console.log("--- Current Leaderboard ---");
        this.scores.forEach((entry, index) => {
            console.log(`#${index + 1}: ${entry.playerName} - ${entry.score} pts`);
        });
    }

    getPlayerRank(rank) {
        // Demonstrates O(1) random access by array index
        if (rank >= 1 && rank <= this.scores.length) {
            return this.scores[rank - 1]; // Convert 1-based rank to 0-based array index
        }
        return null;
    }
}

// --- Example Usage ---
const lb = new Leaderboard(5);

lb.addScore("ShadowNinja", 2450);
lb.addScore("PixelQueen", 3100);
lb.addScore("CyberKnight", 1890);
lb.addScore("SpeedRacer", 2950);
lb.addScore("Vortex", 4200);
lb.addScore("GlitchMaster", 1500); // Too low, will not make the cut

lb.printLeaderboard();

console.log("\n--- Direct Index Lookup O(1) ---");
console.log("Top 1 Player:", lb.getPlayerRank(1));
console.log("Top 3 Player:", lb.getPlayerRank(3));