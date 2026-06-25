* { box-sizing: border-box; }

body {
  margin: 0;
  font-family: Arial, sans-serif;
  background: #f4f6f8;
  color: #222;
}

.app {
  max-width: 480px;
  margin: 0 auto;
  padding: 16px;
}

.card {
  background: #fff;
  border-radius: 14px;
  padding: 16px;
  margin-bottom: 16px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
}

input, button {
  width: 100%;
  padding: 14px;
  font-size: 16px;
  border-radius: 10px;
  border: 1px solid #ccc;
}

button {
  margin-top: 10px;
  background: #2563eb;
  color: white;
  border: none;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

li {
  display: flex;
  justify-content: space-between;
  gap: 8px;
  padding: 12px 0;
  border-bottom: 1px solid #eee;
}

.done {
  text-decoration: line-through;
  opacity: 0.6;
}

.small-btn {
  width: auto;
  padding: 10px 12px;
  margin-top: 0;
  background: #111827;
}
