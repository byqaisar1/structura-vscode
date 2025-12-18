# Structura - Drag & Drop Code Refactor

<div align="center">

![Structura Icon](images/icon.png)

**Reorder functions and classes in VS Code by simply dragging them in the sidebar**

[![VS Code Marketplace](https://img.shields.io/badge/VS%20Code-Marketplace-blue?style=flat-square&logo=visual-studio-code)](https://marketplace.visualstudio.com/items?itemName=structura-dev.structura-code-reorder)
[![GitHub](https://img.shields.io/badge/GitHub-Repository-181717?style=flat-square&logo=github)](https://github.com/qasimrafique107/structura-vscode)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)
[![Version](https://img.shields.io/badge/Version-0.0.1-orange?style=flat-square)](CHANGELOG.md)

</div>

---

## 🎯 Features

### ✨ What Makes Structura Special

- **🎨 Visual Code Organization** - See your entire file structure at a glance in an elegant sidebar
- **⚡ Instant Drag & Drop** - Move functions, classes, and methods with simple mouse gestures
- **🌍 Universal Language Support** - Works with TypeScript, JavaScript, Python, Java, C#, and more
- **🚀 Zero Configuration** - Install and start using immediately - no setup required
- **💾 Safe Refactoring** - Full undo/redo support with Ctrl+Z
- **📦 Offline First** - No external dependencies or API calls

---

## 🎬 How to Use

### Quick Start in 3 Steps:

**1. Open any code file** (`.ts`, `.js`, `.py`, `.java`, etc.)

**2. Find Structura** in the Activity Bar (left sidebar - look for the purple tree icon)

**3. Drag and drop** any function or class to reorder

✅ **Done!** Your code is automatically reorganized with proper spacing preserved.

---

## 📸 Demo

### Before:
```typescript
function thirdFunction() { 
    console.log('Third'); 
}

function firstFunction() { 
    console.log('First'); 
}

function secondFunction() { 
    console.log('Second'); 
}
```

### After (dragging functions):
```typescript
function firstFunction() {    // ← Reordered!
    console.log('First'); 
}

function secondFunction() {   // ← Reordered!
    console.log('Second'); 
}

function thirdFunction() { 
    console.log('Third'); 
}
```

---

## 💡 Why Structura?

**Problem:** Reorganizing code manually means tedious copy-pasting, losing undo history, and risking formatting issues.

**Solution:** Structura brings Eclipse IDE's beloved "Outline Reordering" feature to VS Code - a feature requested by developers for over 5 years!

---

## 🔧 Requirements

- **VS Code** version 1.74.0 or higher
- That's it! No additional dependencies needed.

---

## 📦 Installation

### Method 1: VS Code Marketplace (Recommended)
1. Open VS Code
2. Go to Extensions (`Ctrl+Shift+X`)
3. Search for "**Structura**"
4. Click **Install**

### Method 2: From VSIX File
```bash
code --install-extension structura-code-reorder-0.0.1.vsix
```

---

## 🌟 Supported Languages

Structura works with any language that has a Symbol Provider in VS Code:

✅ **TypeScript** / **JavaScript**  
✅ **Python**  
✅ **Java**  
✅ **C#**  
✅ **C/C++**  
✅ **PHP**  
✅ **Ruby**  
✅ **Go**  
✅ And many more!

---

## ⚠️ Known Limitations

This is the MVP (Minimum Viable Product) version. Here's what to expect:

- **Best Use Case:** Flat function reordering (top-level functions)
- **Class Methods:** Reordering works but is experimental
- **Formatting:** Basic whitespace handling included. For large moves, run "Format Document" (`Shift+Alt+F`) afterwards
- **Large Files:** May have performance issues with files 1000+ lines

---

## 🔮 Roadmap (Future Versions)

We're actively working on:

- [ ] Multi-select drag (reorder multiple functions at once)
- [ ] Keyboard shortcuts (`Ctrl+Up/Down` to reorder)
- [ ] Cross-file refactoring
- [ ] Improved formatting preservation
- [ ] Context menu options ("Move to Top", "Move to Bottom")
- [ ] Performance optimizations for large files

---

## 🐛 Feedback & Support

### Found a Bug?
Open an issue on [GitHub Issues](https://github.com/qasimrafique107/structura-vscode/issues)

### Have a Suggestion?
We'd love to hear it! [Submit a feature request](https://github.com/qasimrafique107/structura-vscode/issues/new)

### Want to Contribute?
Pull requests are welcome! Check out our [Contributing Guidelines](https://github.com/qaisarrafique107-cell/structura-vscode/blob/main/CHANGELOG.md)

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](https://github.com/qaisarrafique107-cell/structura-vscode/blob/main/LICENSE) file for details.

---

## 👨‍💻 Developer

**Created by:** [Qaisar Rafique](https://github.com/qaisarrafique107-cell)

**Repository:** [https://github.com/qaisarrafique107-cell/structura-vscode](https://github.com/qaisarrafique107-cell/structura-vscode)

---

## 🙏 Acknowledgments

Special thanks to:
- The VS Code extension development community
- Developers who requested this feature on GitHub for years
- Eclipse IDE for the original inspiration

---

## 💖 Support the Project

If Structura saved you time, consider:

⭐ **Starring** the [GitHub repository](https://github.com/qaisarrafique107-cell/structura-vscode)  
📢 **Sharing** with other developers  
💬 **Leaving a review** on the VS Code Marketplace

---

<div align="center">

**Made with ❤️ for developers who love clean code**

[Report Bug](https://github.com/qaisarrafique107-cell/structura-vscode/issues) · [Request Feature](https://github.com/qaisarrafique107-cell/structura-vscode/issues) · [Documentation](DEMO_GUIDE.md)

</div>