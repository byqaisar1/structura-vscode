# 📦 How to Install Structura

## Method 1: From .vsix File

1. Open VS Code
2. Press `Ctrl+Shift+P` (Cmd+Shift+P on Mac)
3. Type: "Install from VSIX"
4. Select the `structura-code-reorder-0.0.1.vsix` file
5. Click "Reload" when prompted

## Method 2: Command Line

```bash
code --install-extension structura-code-reorder-0.0.1.vsix
```

## Verify Installation

- Open Extensions view (`Ctrl+Shift+X`)
- Search for "Structura"
- You should see the icon ✅

---

# 🔍 Locating the Structura Sidebar

After installation:

1. Look at the **Activity Bar** (left side of VS Code)
2. Find the **Structura icon** (list icon)
3. Click it to open the Structura panel

OR:

- Go to View → Open View → Type "Structura"

---

# 🎬 How to Use Structura (Step-by-Step Demo)

## Demo 1: Basic Function Reordering

**Step 1:** Create a test file `demo.ts`:

```typescript
function functionA() {
  console.log("I am A");
}

function functionB() {
  console.log("I am B");
}

function functionC() {
  console.log("I am C");
}
```

**Step 2:** Open Structura sidebar

- Click the Structura icon in Activity Bar
- You'll see:
  ```
  📄 demo.ts
    ⚡ functionA
    ⚡ functionB
    ⚡ functionC
  ```

**Step 3:** Drag and Drop

- Click and hold `functionC`
- Drag it up
- Drop it onto `functionA`

**Result:**

```typescript
function functionC() {
  // ← Moved to top!
  console.log("I am C");
}

function functionA() {
  console.log("I am A");
}

function functionB() {
  console.log("I am B");
}
```

✅ Code automatically saves!
✅ Press `Ctrl+Z` to undo if needed!

---

## Demo 2: Reordering Class Methods

**Step 1:** Create `class-demo.ts`:

```typescript
class Calculator {
  subtract(a: number, b: number) {
    return a - b;
  }

  add(a: number, b: number) {
    return a + b;
  }

  multiply(a: number, b: number) {
    return a * b;
  }
}
```

**Step 2:** Open Structura
You'll see:

```
📦 Calculator
  → subtract
  → add
  → multiply
```

**Step 3:** Drag `add` above `subtract`

**Result:**

```typescript
class Calculator {
  add(a: number, b: number) {
    // ← Moved up!
    return a + b;
  }

  subtract(a: number, b: number) {
    return a - b;
  }

  multiply(a: number, b: number) {
    return a * b;
  }
}
```

---

## Demo 3: Multi-Language Support

Structura works with:

**JavaScript (.js):**

```javascript
function hello() {}
function world() {}
```

**Python (.py):**

```python
def first_function():
    pass

def second_function():
    pass
```

**Java (.java):**

```java
public class Demo {
    void methodA() { }
    void methodB() { }
}
```

All support drag-and-drop reordering! ✅

---

# ⚙️ How Structura Works Behind the Scenes

## Architecture:

1. **Symbol Detection**

   - Uses VS Code's `DocumentSymbolProvider` API
   - Parses your code to find functions, classes, methods
   - Updates automatically when you switch files

2. **Tree View Display**

   - Custom `TreeDataProvider` shows symbols in sidebar
   - Icons: ⚡ Functions, 📦 Classes, → Methods
   - Hierarchical view (classes contain methods)

3. **Drag and Drop Logic**

   - Implements `TreeDragAndDropController`
   - When you drag: Captures the symbol's text range
   - When you drop: Calculates new position

4. **Code Movement**

   - Uses `TextEditorEdit` API for safe edits
   - Deletes code from original position
   - Inserts at new position with proper spacing
   - Applies changes atomically (all-or-nothing)

5. **Smart Features**
   - Preserves code formatting
   - Handles multi-line functions correctly
   - Adjusts position calculations (moving up vs down)
   - Full undo/redo support (Ctrl+Z works!)

## Why It's Safe:

- ✅ No data loss (uses VS Code's official APIs)
- ✅ Undo support (transactional edits)
- ✅ Works offline (no external dependencies)
- ✅ No file overwrites (uses text editor APIs)

---

# 🔧 Troubleshooting Common Issues

## Issue 1: Structura Sidebar Not Visible

**Solution:**

- View → Open View → Search "Structura"
- OR: Look for the list icon in Activity Bar

## Issue 2: No Functions Showing

**Possible Causes:**

- File is empty or has no functions
- Language not supported (use JS/TS/Python/Java)
- Wait 2-3 seconds for language server to load

## Issue 3: Icon Not Showing

**Solution:**

- Uninstall old version: `code --uninstall-extension structura-dev.structura-code-reorder`
- Install new .vsix file (the one with icon.png)
- Reload VS Code: `Ctrl+Shift+P` → "Reload Window"

## Issue 4: Drag-Drop Not Working

**Check:**

- Is the file saved? (Structura works best on saved files)
- Are you dragging onto a valid target?
- Try reloading the window

---

# 🎥 Demo Video Script (For Recording)

## 30-Second Demo:

1. [0:00] "Meet Structura - drag-and-drop code refactoring for VS Code"
2. [0:05] Open demo.ts with 3 functions
3. [0:10] Click Structura icon in sidebar
4. [0:12] Show the function list
5. [0:15] Drag function C
6. [0:18] Drop it at the top
7. [0:20] Show the reordered code
8. [0:25] Press Ctrl+Z (undo demo)
9. [0:28] "Available now on VS Code Marketplace!"

## 2-Minute Full Demo:

**Intro (0:00-0:15):**

- "Tired of copy-pasting code to reorganize your files?"
- "Structura brings Eclipse's best feature to VS Code"

**Installation (0:15-0:30):**

- Show Extensions marketplace
- Click install
- Show icon appearing in Activity Bar

**Basic Demo (0:30-1:00):**

- Create simple file with functions A, B, C
- Open Structura sidebar
- Drag C to top
- Show instant reordering

**Advanced Demo (1:00-1:30):**

- Show class with methods
- Reorder methods
- Show Python support
- Show Java support

**Features (1:30-1:50):**

- Undo support
- Multi-language
- Preserves formatting
- Works offline

**Call to Action (1:50-2:00):**

- "Install Structura today"
- "Star on GitHub"
- "Share feedback"
