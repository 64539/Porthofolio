  document.addEventListener('DOMContentLoaded', function() {
           
            const headings = document.querySelectorAll('section h2');
            headings.forEach(heading => {
                heading.addEventListener('mouseenter', function() {
                    this.classList.add('glitch');
                    this.setAttribute('data-text', this.textContent);
                });
                
                heading.addEventListener('mouseleave', function() {
                    this.classList.remove('glitch');
                });
            });
            
          
            const terminalLines = document.querySelectorAll('.terminal-command, .terminal-output');
            terminalLines.forEach((line, index) => {
                const text = line.textContent;
                line.textContent = '';
                
                setTimeout(() => {
                    let i = 0;
                    const typing = setInterval(() => {
                        if (i < text.length) {
                            line.textContent += text.charAt(i);
                            i++;
                        } else {
                            clearInterval(typing);
                        }
                    }, 20);
                }, index * 500);
            });
            
           
            const scanner = document.querySelector('.cyberpunk-scanner');
            setInterval(() => {
                scanner.style.animation = 'none';
                void scanner.offsetWidth; 
                scanner.style.animation = 'scanner 3s linear infinite';
            }, 3000);
        });