(function() {
    'use strict';

    const AUTH_KEY = 'petpad_auth';
    const CORRECT_PASSWORD = 'JukeLuke2026';

    function isAuthenticated() {
        try {
            return localStorage.getItem(AUTH_KEY) === 'true';
        } catch (e) {
            return false;
        }
    }

    function setAuthenticated() {
        try {
            localStorage.setItem(AUTH_KEY, 'true');
        } catch (e) {}
    }

    function createOverlay() {
        document.documentElement.style.visibility = 'hidden';

        function showOverlay() {
            const overlay = document.createElement('div');
            overlay.id = 'petpad-auth-overlay';
            overlay.innerHTML = `
                <div class="petpad-auth-modal">
                    <div class="petpad-auth-brand">
                        <img src="/PetPadLogoTextGreen.png" alt="Pet Pad" style="height:40px;">
                    </div>
                    <h2>Coming Soon</h2>
                    <p>This page is password protected.</p>
                    <div class="petpad-auth-form">
                        <input type="password" id="petpad-auth-input" placeholder="Enter password" autocomplete="off">
                        <button id="petpad-auth-btn">Enter</button>
                        <p id="petpad-auth-error" class="petpad-auth-error"></p>
                    </div>
                </div>
            `;

            const style = document.createElement('style');
            style.textContent = `
                #petpad-auth-overlay {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(135deg, #312E81 0%, #5B21B6 25%, #7C3AED 50%, #EC4899 75%, #F472B6 100%);
                    z-index: 999999;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                    visibility: visible;
                }
                .petpad-auth-modal {
                    background: #fff;
                    border-radius: 16px;
                    padding: 40px;
                    max-width: 380px;
                    width: 90%;
                    text-align: center;
                    box-shadow: 0 20px 60px rgba(0,0,0,0.3);
                }
                .petpad-auth-brand { margin-bottom: 20px; }
                .petpad-auth-modal h2 {
                    margin: 0 0 8px;
                    color: #2D3748;
                    font-size: 1.5em;
                    font-weight: 700;
                }
                .petpad-auth-modal p {
                    color: #718096;
                    margin: 0 0 24px;
                    font-size: 0.95em;
                }
                .petpad-auth-form {
                    display: flex;
                    flex-direction: column;
                    gap: 12px;
                }
                .petpad-auth-form input {
                    padding: 12px 16px;
                    border: 2px solid #E2E8F0;
                    border-radius: 10px;
                    font-size: 1em;
                    font-family: inherit;
                    outline: none;
                    transition: border-color 0.2s;
                }
                .petpad-auth-form input:focus { border-color: #40E0D0; }
                .petpad-auth-form button {
                    padding: 12px 16px;
                    background: #40E0D0;
                    color: #111;
                    border: none;
                    border-radius: 10px;
                    font-size: 1em;
                    font-weight: 600;
                    font-family: inherit;
                    cursor: pointer;
                    transition: background 0.2s, transform 0.1s;
                }
                .petpad-auth-form button:hover { background: #2EC4BA; }
                .petpad-auth-form button:active { transform: scale(0.98); }
                .petpad-auth-error {
                    color: #EF4444;
                    font-size: 0.85em;
                    margin: 0;
                    min-height: 1.2em;
                }
            `;

            document.head.appendChild(style);
            document.body.appendChild(overlay);

            const input = document.getElementById('petpad-auth-input');
            const btn = document.getElementById('petpad-auth-btn');
            const error = document.getElementById('petpad-auth-error');

            function checkPassword() {
                if (input.value === CORRECT_PASSWORD) {
                    setAuthenticated();
                    overlay.remove();
                    style.remove();
                    document.documentElement.style.visibility = '';
                } else {
                    error.textContent = 'Incorrect password. Please try again.';
                    input.value = '';
                    input.focus();
                }
            }

            btn.addEventListener('click', checkPassword);
            input.addEventListener('keydown', function(e) {
                if (e.key === 'Enter') checkPassword();
            });

            input.focus();
        }

        if (document.body) {
            showOverlay();
        } else {
            document.addEventListener('DOMContentLoaded', showOverlay);
        }
    }

    if (!isAuthenticated()) {
        createOverlay();
    }
})();
