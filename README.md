# 🌍 Climate Heroes: Save the Planet

## Overview

**Climate Heroes: Save the Planet** is an educational 2D web-based board game that teaches players about climate change and sustainability through engaging gameplay. Players compete to become the first "Climate Hero" by implementing real-world environmental solutions while navigating climate challenges.

### 🎯 Game Purpose

This game was designed to raise awareness about climate action and sustainability by:
- Teaching players about practical climate solutions (solar energy, wind power, reforestation, etc.)
- Demonstrating the impact of environmental crises (wildfires, floods, heat waves)
- Showing how individual actions contribute to reducing carbon footprints
- Making climate education fun and accessible through interactive gameplay

### 🎮 Game Features

- **2-Player Turn-Based Gameplay**: Compete with a friend to reach Net Zero first
- **25 Interactive Board Spaces**: Each space represents real climate actions or challenges
- **Dynamic Carbon Tracking**: Watch your carbon footprint change based on your actions
- **Educational Content**: Learn about 15+ real-world sustainability initiatives
- **Beautiful UI/UX**: Smooth animations, gradients, and responsive design
- **Multiple Game Screens**: Menu, Rules, Play, and Game Over screens

---

## 📁 Project Structure

```
game/
│
├── index.html          # Main HTML structure with all game screens
├── style.css           # Complete styling, animations, and responsive design
├── index.js            # Game logic, state management, and interactions
└── README.md           # This file
```

### File Descriptions

#### `index.html`
The main HTML file containing:
- **Menu Screen**: Landing page with start game and how to play buttons
- **Rules Screen**: Comprehensive gameplay instructions
- **Play Screen**: Interactive game board with player panels and dice controls
- **Game Over Screen**: Victory celebration and final statistics

#### `style.css`
Complete styling including:
- Responsive grid layouts for all screen sizes
- CSS animations (floating, glowing, pulsing, bouncing)
- Gradient backgrounds and color schemes
- Media queries for mobile and tablet compatibility
- Custom styling for board tiles, buttons, and UI elements

#### `index.js`
Game logic implementation:
- Game state management (player positions, carbon levels, actions)
- Board tile definitions (25 spaces with different effects)
- Dice rolling mechanism with animation
- Player movement and turn management
- Carbon footprint calculations
- Win condition checking and game over handling

---

## 🚀 How to Run the Game

### Method 1: Direct Browser Access (Easiest)

1. **Download all files**
   - Download `index.html`, `style.css`, and `index.js` to the same folder

2. **Open in Browser**
   - Double-click `index.html`, OR
   - Right-click `index.html` → "Open with" → Choose your web browser
   - Supported browsers: Chrome, Firefox, Safari, Edge

3. **Start Playing!**
   - The game will load immediately in your browser
   - No installation or setup required

### Method 2: Local Web Server (Recommended for Development)

```bash
# Navigate to project directory
cd climate-heroes

# Using Python 3
python -m http.server 8000

# Using Python 2
python -m SimpleHTTPServer 8000

# Using Node.js (with http-server package)
npx http-server

# Using PHP
php -S localhost:8000
```

Then navigate to:
- `http://localhost:8000/index.html`

### Method 3: Deploy to Web

You can deploy this game to any static hosting service:
- **GitHub Pages**: Push to repo, enable Pages in settings
- **Netlify**: Drag and drop the folder
- **Vercel**: Connect your Git repository
- **Surge**: Run `surge` in project directory

### System Requirements

- **Browser**: Any modern web browser (Chrome 90+, Firefox 88+, Safari 14+, Edge 90+)
- **JavaScript**: Must be enabled
- **Internet**: Not required (game runs completely offline)
- **Screen**: Minimum 1024x768 resolution recommended (responsive to mobile)
- **Storage**: < 100KB total file size

---

## 📖 How to Play

### Game Objective

Be the first player to reach space 25 (Net Zero) by reducing your carbon footprint from 100 to as low as possible through strategic climate actions.

### Gameplay Instructions

1. **Starting the Game**
   - Click "🎮 Start Game" from the main menu
   - Both players start at position 0 with a carbon footprint of 100

2. **Taking Turns**
   - Player 1 goes first (indicated by golden glow around player panel)
   - Click "Roll Dice" to roll a number between 1-6
   - Player token automatically moves forward the rolled number of spaces
   - Your turn ends automatically after moving

3. **Landing on Spaces**
   - **🟢 Action Spaces (Green)**: Implement climate solutions, reduce carbon emissions
     - Examples: Solar Power (-15), Wind Energy (-18), Plant Trees (-10)
   - **🔴 Crisis Spaces (Red)**: Face environmental disasters, carbon increases
     - Examples: Wildfire (+12), Heat Wave (+10), Flood (+15)
   - **⚪ Neutral Spaces (Gray)**: Safe zones with no carbon effect
     - Examples: Research, Education, Climate Summit
   - **🟡 Finish Space (Gold)**: Reach Net Zero and win the game! (-25 carbon bonus)

4. **Tracking Progress**
   - **Carbon Footprint**: 
     - 🔴 High (70-100): Red indicator
     - 🟠 Medium (40-69): Orange indicator
     - 🟢 Low (0-39): Green indicator
   - **Position**: Current space / 25 total spaces
   - **Climate Actions**: Count of positive actions taken

5. **Winning the Game**
   - First player to reach space 25 becomes the Climate Hero
   - Final statistics show carbon footprint, actions taken, and position

### Controls

- **Mouse/Touch**: Click buttons to interact
- **Roll Dice Button**: Press to roll (1-6) and automatically move
- **Exit Game**: Return to main menu anytime (with confirmation)
- **Play Again**: Restart a new game from Game Over screen
- **Back to Menu**: Return to main menu from any screen

---

## 🎨 Game Design

### Board Spaces (25 Total)

#### Climate Action Spaces (13 spaces) - Reduce Carbon 🟢
| Space # | Name | Icon | Effect | Message |
|---------|------|------|--------|---------|
| 1 | Solar Power | ☀️ | -15 | Installed solar panels! |
| 3 | Wind Energy | 💨 | -18 | Built wind turbines! |
| 5 | Plant Trees | 🌳 | -10 | Reforestation complete! |
| 7 | Public Transit | 🚊 | -12 | Metro expansion! |
| 9 | Electric Cars | 🔌 | -14 | EV infrastructure! |
| 12 | Recycling | ♻️ | -8 | Recycling program! |
| 13 | Green Buildings | 🏢 | -16 | Eco buildings! |
| 16 | Clean Energy | ⚡ | -20 | Renewable grid! |
| 19 | Composting | 🌱 | -9 | Organic waste program! |
| 20 | Ocean Cleanup | 🌊 | -11 | Ocean restoration! |
| 22 | Smart Grid | 🔋 | -22 | Energy efficiency! |
| 24 | Net Zero Goal | 🏆 | -25 | Climate Hero! You reached Net Zero! |

#### Climate Crisis Spaces (6 spaces) - Increase Carbon 🔴
| Space # | Name | Icon | Effect | Message |
|---------|------|------|--------|---------|
| 4 | Wildfire | 🔥 | +12 | Wildfire disaster! |
| 8 | Heat Wave | 🌡️ | +10 | Extreme heat! |
| 11 | Flood | 🌊 | +15 | Coastal flooding! |
| 15 | Drought | 🏜️ | +9 | Water crisis! |
| 18 | Storm | ⛈️ | +13 | Hurricane damage! |
| 23 | Smog | 🏭 | +11 | Air pollution! |

#### Neutral Spaces (6 spaces) - No Effect ⚪
| Space # | Name | Icon | Effect | Purpose |
|---------|------|------|--------|---------|
| 0 | Start | 🚀 | 0 | Begin your climate journey! |
| 2 | Research | 🔬 | 0 | Researching solutions... |
| 6 | Education | 📚 | 0 | Learning about climate! |
| 10 | Summit | 🏛️ | 0 | Climate conference |
| 14 | Innovation Lab | 💡 | 0 | Developing tech... |
| 17 | Policy Forum | 📋 | 0 | Making policies... |
| 21 | Community | 👥 | 0 | Community organizing |

---

## 🛠️ Technical Details

### Technology Stack

- **HTML5**: Semantic structure with screen-based layout
- **CSS3**: Advanced styling with animations, gradients, and flexbox/grid
- **Vanilla JavaScript (ES5)**: Pure JavaScript, no frameworks or libraries

### Key Features Implementation

#### No External Dependencies
- Pure HTML/CSS/JS - no jQuery, React, or other libraries
- All assets (emojis) are Unicode characters
- Self-contained single-page application

#### Browser Storage
- **None required** - all state maintained in JavaScript variables during session
- Game resets when page refreshes (intentional design)
- No localStorage/sessionStorage used

#### Responsive Design
```css
/* Desktop: 3-column layout */
@media (min-width: 1201px)
  - Board: 5 columns

/* Tablet: 3-column layout */
@media (max-width: 1200px)
  - Board: 4 columns

/* Mobile: Stacked layout */
@media (max-width: 900px)
  - Board: 3 columns
  - Player panels stack vertically
```

#### Animations Used
- `menuGradient`: Animated background gradient on menu
- `fadeInUp`: Entrance animation for screens
- `glow`: Text glow effect on title
- `float`: Floating planet icon
- `pulse`: Active player indicator
- `diceSpin`: Dice roll animation
- `winGlow`: Pulsing finish space
- `bounce`: Trophy bounce on game over

#### Game State Management
```javascript
var game = {
    players: [
        { id: 1, pos: 0, carbon: 100, actions: 0 },
        { id: 2, pos: 0, carbon: 100, actions: 0 }
    ],
    currentPlayer: 0,
    gameOver: false,
    boardSize: 25
};
```

#### Key Functions
- `showScreen(screenId)`: Navigate between screens
- `startGame()`: Initialize new game
- `createBoard()`: Render 25 board tiles
- `rollDice()`: Animate dice and trigger move
- `executeMove()`: Handle player movement and effects
- `updateUI()`: Refresh all player statistics
- `updateMarkers()`: Update player positions on board
- `endGame()`: Display winner and statistics

---

## 📊 Educational Content

### Real-World Climate Solutions Featured

1. **Renewable Energy**: Solar panels, wind turbines, clean energy grids
2. **Sustainable Transport**: Public transit, electric vehicles, bike lanes
3. **Nature-Based Solutions**: Tree planting, ocean cleanup, green spaces
4. **Circular Economy**: Recycling programs, composting, waste reduction
5. **Green Infrastructure**: Eco-friendly buildings, smart grids, energy efficiency
6. **Policy & Education**: Climate summits, research, community organizing

### Climate Challenges Represented

1. **Extreme Weather**: Heat waves, storms, floods
2. **Environmental Disasters**: Wildfires, droughts
3. **Pollution**: Smog, air quality issues
4. **Resource Scarcity**: Water crises

### Learning Outcomes

✅ **Climate Awareness**: Understanding 13+ climate solutions  
✅ **Impact Understanding**: Visual feedback shows action consequences  
✅ **Systems Thinking**: See how actions accumulate over time  
✅ **Strategic Planning**: Balance risk (crises) vs reward (actions)  
✅ **Real-World Connection**: Each space represents actual initiatives  

---

## 🎯 Project Summary

### Development Approach

This game was developed as a **multi-file web application** with separation of concerns:
- **HTML**: Structure and content
- **CSS**: Presentation and design
- **JavaScript**: Behavior and logic

The game runs entirely in the browser without any server-side code, databases, or external dependencies, making it highly accessible and easy to deploy.

### Social Issue Addressed

**Theme**: Climate Change & Sustainability

The game directly addresses climate change by:
- **Educating**: Teaching players about real climate solutions
- **Engaging**: Making environmental education fun and interactive
- **Empowering**: Showing that individual actions make a difference
- **Raising Awareness**: Highlighting both solutions and challenges
- **Inspiring Action**: Encouraging players to think about sustainability

### Target Audience

- **Students**: Ages 12+ learning about environmental science
- **Educators**: Teachers looking for interactive climate education tools
- **Families**: Parents teaching children about sustainability
- **General Public**: Anyone interested in climate action
- **Organizations**: Climate advocacy groups for workshops/events

### Design Philosophy

1. **Accessibility First**: Simple rules, clear visuals, no barriers to entry
2. **Educational Value**: Every element teaches something about climate
3. **Engaging Gameplay**: Fun mechanics keep players invested
4. **Visual Appeal**: Modern design with smooth animations
5. **Mobile-Friendly**: Responsive design works on all devices

---

## 🌟 Future Enhancements

Potential features for future versions:

### Gameplay Enhancements
- [ ] 3-4 player support
- [ ] Difficulty levels (easy/medium/hard)
- [ ] Special event cards
- [ ] Power-up abilities
- [ ] Leaderboard system

### Educational Features
- [ ] Detailed info popups for each space
- [ ] Real-world statistics integration
- [ ] Educational quiz mode
- [ ] Progress tracking across sessions
- [ ] Achievement system

### Technical Improvements
- [ ] Sound effects and background music
- [ ] Multiplayer online mode
- [ ] Save/load game state
- [ ] Multiple board layouts
- [ ] Language localization
- [ ] Accessibility features (screen reader support)

### Content Expansion
- [ ] More board spaces (50-space version)
- [ ] Seasonal climate events
- [ ] Regional climate challenges
- [ ] Historical climate scenarios
- [ ] Future projection modes

---

## 🐛 Troubleshooting

### Common Issues

**Issue**: Game doesn't load
- **Solution**: Ensure all three files are in the same folder
- **Solution**: Check that JavaScript is enabled in your browser
- **Solution**: Try a different browser

**Issue**: Dice doesn't roll
- **Solution**: Make sure you clicked "Roll Dice" button
- **Solution**: Wait for previous animation to complete
- **Solution**: Refresh the page and try again

**Issue**: Emojis not displaying
- **Solution**: Use a modern browser (Chrome, Firefox, Safari, Edge)
- **Solution**: Update your browser to the latest version
- **Solution**: Check your operating system emoji support

**Issue**: Layout looks broken on mobile
- **Solution**: Try landscape orientation for better view
- **Solution**: Zoom out if content is too large
- **Solution**: Use a tablet or desktop for optimal experience

**Issue**: Game lags or runs slowly
- **Solution**: Close other browser tabs
- **Solution**: Disable browser extensions
- **Solution**: Try a different browser

---

## 🤝 Contributing

Want to improve or customize the game? Here's how:

### Making Changes

1. **Fork/Download** the project files
2. **Edit files** in your favorite code editor:
   - Modify `index.html` for structure changes
   - Edit `style.css` for design updates
   - Update `index.js` for gameplay logic
3. **Test locally** by opening `index.html` in a browser
4. **Share** your improvements with the community!

### Code Style Guidelines

- Use descriptive variable names
- Add comments for complex logic
- Maintain consistent indentation (4 spaces)
- Test on multiple browsers
- Keep mobile responsiveness in mind

### Ideas for Contributions

- Add new board spaces with different climate actions
- Create alternative color themes
- Implement additional game modes
- Improve animations and transitions
- Enhance mobile experience
- Add accessibility features
- Translate to other languages

---

## 📄 License

This educational game is created for learning and awareness purposes. 

**Usage Rights**:
- ✅ Use for educational purposes
- ✅ Modify and customize for personal use
- ✅ Share with students and educators
- ✅ Use in workshops and presentations
- ❌ Commercial use without permission
- ❌ Remove attribution

**Attribution**: If you use or modify this game, please credit the original Climate Heroes project.

---

## 📞 Support & Contact

### Getting Help

- Check this README for common solutions
- Review the code comments in each file
- Test in a different browser
- Clear browser cache and reload

### Reporting Issues

If you find a bug or have a suggestion:
1. Document the issue (screenshots help!)
2. Note your browser and operating system
3. Describe steps to reproduce the problem
4. Share your suggestions for improvements

---

## 🎉 Quick Start Summary

**For Players:**
1. Download all 3 files to one folder
2. Double-click `index.html`
3. Click "Start Game"
4. Roll dice and enjoy!

**For Developers:**
1. Clone/download the project
2. Open in your code editor
3. Run a local server (optional)
4. Make changes and test
5. Deploy to your preferred hosting

**For Educators:**
1. Download the game files
2. Host on your school's website, or
3. Share files directly with students
4. Use as a teaching tool for climate education

---

## 🌍 Make an Impact

This game is just the beginning. Every time someone plays:
- They learn about climate solutions
- They understand the urgency of action
- They're inspired to make real-world changes

**Share this game** with friends, family, students, and colleagues. Together, we can raise awareness about climate change and inspire action to save our planet!

---

*Last Updated: 2025*  
*Version: 1.0*  
*Status: Ready to Play*  
*Made with 💚 for Planet Earth*

---

## 🙏 Acknowledgments

- **Climate Science Community**: For the real-world solutions represented in this game
- **Web Standards**: HTML5, CSS3, and JavaScript communities
- **Open Source**: Inspired by the spirit of open education and collaboration
- **Players**: Thank you for playing and learning about climate action!

**Together, we can become Climate Heroes! 🌍💚**