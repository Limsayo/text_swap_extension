
# Swap Split

**Swap Split** is a lightweight VS Code extension that streamlines code reordering. It splits the current line at the cursor position and instantly moves the text on the right to the line **above** the text on the left, automatically handling indentation.

It is perfect for reordering variable declarations, restructuring logic, or fixing code organization without cutting and pasting.

## Features

* **Split & Swap:** Instantly moves the code segment *after* your cursor to the line *above*.
* **Auto-Indentation:** Respects the indentation of the original line, keeping your code clean.
* **Whitespace Cleanup:** Automatically trims unnecessary spaces during the swap.
* **Multi-Cursor Support:** Works with multiple selections simultaneously.

## How to Use

Simply place your cursor where you want to split the line and press the shortcut.

**Default Shortcut:**
* Windows/Linux: `Ctrl` + `Alt` + `Enter`
* Mac: `Cmd` + `Option` + `Enter`

---

### Example 1: Reordering Variables
Sometimes you write two variables on one line and decide they should be separate, or the order is wrong.

**Before:**
```javascript
const firstName = "John"; |const lastName = "Doe";
//                        ^ Cursor is here
```

**After pressing ctrl/cmd+alt+enter**

```javascript
const lastName = "Doe";
const firstName = "John";
```

**Known issues**

None at this time


