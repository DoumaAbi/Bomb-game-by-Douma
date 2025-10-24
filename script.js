document.addEventListener('DOMContentLoaded', function() {
    const bomber = document.getElementById('bomber');
    const gameArea = document.getElementById('game-area');
    const explosionContainer = document.getElementById('explosion-container');
    const bloodContainer = document.getElementById('blood-container');
    const organsContainer = document.getElementById('organs-container');
    const bodyPartsContainer = document.getElementById('body-parts-container');
    const dogContainer = document.getElementById('dog-container');
    const explosionText = document.getElementById('explosion-text');
    const resetButton = document.getElementById('reset-button');
    
    let bodyParts = [];
    let organs = [];
    
    // Bomber anklickbar machen
    bomber.addEventListener('click', function() {
        explodeBomber();
    });
    
    // Explosionsfunktion
    function explodeBomber() {
        // Bomber ausblenden
        bomber.classList.add('hidden');
        
        // Extrem starkes Bildschirm wackeln
        gameArea.classList.add('screen-shake');
        
        // Explosionssequenz starten
        createExplosion();
        
        // Massives Blut und Organe
        createMassiveBlood();
        createFlyingOrgans();
        createFlyingBodyParts();
        
        // Hund nach 3 Sekunden erscheinen lassen
        setTimeout(createDog, 3000);
        
        // Text und Reset-Button anzeigen
        setTimeout(function() {
            explosionText.classList.remove('hidden');
            resetButton.classList.remove('hidden');
        }, 2500);
        
        // Wackeln nach 1.2 Sekunden stoppen
        setTimeout(function() {
            gameArea.classList.remove('screen-shake');
        }, 1200);
    }
    
    // Realistische Explosion erstellen
    function createExplosion() {
        const explosion = document.getElementById('explosion');
        const shockwave = document.getElementById('shockwave');
        const smoke = document.getElementById('smoke');
        const fireball = document.getElementById('fireball');
        const sparks = document.getElementById('sparks');
        
        // Riesen Explosion
        explosion.animate([
            { width: '0px', height: '0px', opacity: 1 },
            { width: '600px', height: '600px', opacity: 0.9 },
            { width: '1000px', height: '1000px', opacity: 0 }
        ], {
            duration: 1200,
            easing: 'cubic-bezier(0.215, 0.610, 0.355, 1)'
        });
        
        // Massive Schockwelle
        shockwave.animate([
            { width: '0px', height: '0px', opacity: 0.9, borderWidth: '12px' },
            { width: '1200px', height: '1200px', opacity: 0, borderWidth: '3px' }
        ], {
            duration: 1500,
            easing: 'ease-out'
        });
        
        // Riesiger Feuerball
        fireball.animate([
            { width: '0px', height: '0px', opacity: 1 },
            { width: '800px', height: '800px', opacity: 0.8 },
            { width: '1300px', height: '1300px', opacity: 0 }
        ], {
            duration: 1800,
            easing: 'cubic-bezier(0.215, 0.610, 0.355, 1)'
        });
        
        // Massiver Rauch
        smoke.animate([
            { width: '0px', height: '0px', opacity: 0 },
            { width: '1500px', height: '1200px', opacity: 0.6 },
            { width: '2000px', height: '1600px', opacity: 0 }
        ], {
            duration: 5000,
            easing: 'ease-out'
        });
        
        // Extrem viele Funken
        createSparks();
    }
    
    // Funken für die Explosion
    function createSparks() {
        const sparks = document.getElementById('sparks');
        const sparkCount = 200;
        
        for (let i = 0; i < sparkCount; i++) {
            const spark = document.createElement('div');
            spark.className = 'spark';
            sparks.appendChild(spark);
            
            // Zufällige Richtung und Geschwindigkeit
            const angle = Math.random() * Math.PI * 2;
            const distance = 200 + Math.random() * 600;
            const duration = 800 + Math.random() * 1500;
            const size = 4 + Math.random() * 10;
            
            spark.style.width = `${size}px`;
            spark.style.height = `${size}px`;
            
            spark.animate([
                { 
                    transform: 'translate(-50%, -50%) translate(0, 0)',
                    opacity: 1
                },
                { 
                    transform: `translate(-50%, -50%) translate(${Math.cos(angle) * distance}px, ${Math.sin(angle) * distance}px)`,
                    opacity: 0
                }
            ], {
                duration: duration,
                easing: 'cubic-bezier(0.215, 0.610, 0.355, 1)'
            });
            
            // Funken nach Animation entfernen
            setTimeout(() => {
                spark.remove();
            }, duration);
        }
    }
    
    // MASSIVES Blut überall
    function createMassiveBlood() {
        const bloodCount = 200;
        
        // Blutspritzer über den gesamten Bildschirm
        for (let i = 0; i < bloodCount; i++) {
            setTimeout(() => {
                createBloodSplatter();
            }, Math.random() * 1000);
        }
        
        // Blutströme von oben nach unten
        createBloodStreams();
        
        // Riesige Blutlachen
        createMassiveBloodPools();
        
        // Blutsprays an Wänden
        createWallBloodSprays();
    }
    
    function createBloodSplatter() {
        const bloodType = Math.random();
        let bloodElement;
        
        if (bloodType < 0.4) {
            bloodElement = document.createElement('div');
            bloodElement.className = 'blood-splatter';
            const size = 10 + Math.random() * 40;
            bloodElement.style.width = `${size}px`;
            bloodElement.style.height = `${size * (0.5 + Math.random() * 0.8)}px`;
            
        } else if (bloodType < 0.7) {
            bloodElement = document.createElement('div');
            bloodElement.className = 'blood-stain';
            const size = 25 + Math.random() * 70;
            bloodElement.style.width = `${size}px`;
            bloodElement.style.height = `${size * (0.3 + Math.random() * 0.7)}px`;
            
        } else {
            bloodElement = document.createElement('div');
            bloodElement.className = 'blood-drip';
            const width = 5 + Math.random() * 12;
            const height = 20 + Math.random() * 60;
            bloodElement.style.width = `${width}px`;
            bloodElement.style.height = `${height}px`;
        }
        
        // Überall auf dem Bildschirm
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        
        bloodElement.style.left = `${posX}%`;
        bloodElement.style.top = `${posY}%`;
        bloodElement.style.transform = `rotate(${Math.random() * 360}deg)`;
        
        bloodContainer.appendChild(bloodElement);
    }
    
    function createBloodStreams() {
        // Viele Blutströme von verschiedenen Positionen
        for (let i = 0; i < 15; i++) {
            const stream = document.createElement('div');
            stream.className = 'blood-stream';
            
            const width = 4 + Math.random() * 8;
            const startHeight = 5 + Math.random() * 15;
            const endHeight = 300 + Math.random() * 400;
            
            stream.style.width = `${width}px`;
            stream.style.left = `${Math.random() * 100}%`;
            stream.style.top = '0%';
            
            bloodContainer.appendChild(stream);
        }
    }
    
    function createMassiveBloodPools() {
        // Riesige Blutlachen überall
        for (let i = 0; i < 12; i++) {
            const pool = document.createElement('div');
            pool.className = 'blood-pool';
            
            const width = 80 + Math.random() * 200;
            const height = 60 + Math.random() * 150;
            
            pool.style.width = `${width}px`;
            pool.style.height = `${height}px`;
            pool.style.bottom = `${Math.random() * 30}%`;
            pool.style.left = `${Math.random() * 100}%`;
            pool.style.opacity = '0.9';
            
            bloodContainer.appendChild(pool);
        }
    }
    
    function createWallBloodSprays() {
        // Blutsprays an allen Wänden
        for (let i = 0; i < 20; i++) {
            const spray = document.createElement('div');
            spray.className = 'blood-spray';
            
            const size = 15 + Math.random() * 35;
            spray.style.width = `${size}px`;
            spray.style.height = `${size}px`;
            
            // Linke oder rechte Wand
            if (Math.random() > 0.5) {
                spray.style.left = '2%';
                spray.style.top = `${10 + Math.random() * 80}%`;
            } else {
                spray.style.right = '2%';
                spray.style.top = `${10 + Math.random() * 80}%`;
            }
            
            bloodContainer.appendChild(spray);
        }
    }
    
    // Organe die überall hinfliegen und liegen bleiben
    function createFlyingOrgans() {
        const organTypes = ['heart', 'lung', 'intestine', 'bone', 'brain', 'stomach'];
        const organCount = 25;
        
        for (let i = 0; i < organCount; i++) {
            setTimeout(() => {
                createOrgan(organTypes[Math.floor(Math.random() * organTypes.length)]);
            }, Math.random() * 1500);
        }
    }
    
    function createOrgan(type) {
        const organ = document.createElement('div');
        organ.className = `organ ${type}`;
        
        let width, height;
        
        switch(type) {
            case 'heart':
                width = 30 + Math.random() * 25;
                height = 30 + Math.random() * 25;
                break;
            case 'lung':
                width = 35 + Math.random() * 30;
                height = 25 + Math.random() * 20;
                break;
            case 'intestine':
                width = 40 + Math.random() * 35;
                height = 20 + Math.random() * 15;
                break;
            case 'bone':
                width = 25 + Math.random() * 30;
                height = 10 + Math.random() * 8;
                break;
            case 'brain':
                width = 35 + Math.random() * 25;
                height = 25 + Math.random() * 20;
                break;
            case 'stomach':
                width = 30 + Math.random() * 25;
                height = 20 + Math.random() * 15;
                break;
        }
        
        organ.style.width = `${width}px`;
        organ.style.height = `${height}px`;
        
        // Startposition in der Mitte
        const startX = 40 + Math.random() * 20;
        const startY = 40 + Math.random() * 20;
        organ.style.left = `${startX}%`;
        organ.style.top = `${startY}%`;
        
        organsContainer.appendChild(organ);
        organs.push({element: organ, type: type});
        
        // Organ wird extrem weit weggeschleudert
        const angle = Math.random() * Math.PI * 2;
        const distance = 100 + Math.random() * 300;
        const rotation = Math.random() * 1080 - 540;
        const endX = startX + (Math.cos(angle) * distance / 10);
        const endY = startY + (Math.sin(angle) * distance / 10);
        
        organ.animate([
            { 
                transform: 'translate(0, 0) rotate(0deg)',
                opacity: 1 
            },
            { 
                transform: `translate(${Math.cos(angle) * distance}px, ${Math.sin(angle) * distance}px) rotate(${rotation}deg)`,
                opacity: 0.9 
            }
        ], {
            duration: 1200 + Math.random() * 800,
            easing: 'cubic-bezier(0.215, 0.610, 0.355, 1)',
            fill: 'forwards'
        });
        
        // Endposition setzen
        setTimeout(() => {
            organ.style.left = `${endX}%`;
            organ.style.top = `${endY}%`;
            organ.style.transform = `rotate(${rotation}deg)`;
        }, 1200 + Math.random() * 800);
    }
    
    // Körperteile die wegfliegen und liegen bleiben
    function createFlyingBodyParts() {
        // Arme wegfliegen lassen
        createFlyingArm('left');
        createFlyingArm('right');
        
        // Beine wegfliegen lassen
        createFlyingLeg('left');
        createFlyingLeg('right');
        
        // Kopf wegfliegen lassen
        createFlyingHead();
        
        // Torso wegfliegen lassen
        createFlyingTorso();
        
        // Zusätzliche Körperteil-Fragmente
        createBodyFragments();
    }
    
    function createFlyingArm(side) {
        const arm = document.createElement('div');
        arm.className = `body-part arm-part ${side}-arm-part`;
        
        arm.style.width = '25px';
        arm.style.height = '70px';
        
        // Startposition in der Mitte
        const startX = 50;
        const startY = 50;
        arm.style.left = `${startX}%`;
        arm.style.top = `${startY}%`;
        
        bodyPartsContainer.appendChild(arm);
        bodyParts.push({element: arm, type: 'arm', side: side});
        
        // Arm wird weggeschleudert
        const angle = (side === 'left' ? Math.PI * 0.7 : Math.PI * 1.3) + (Math.random() * 0.5 - 0.25);
        const distance = 150 + Math.random() * 200;
        const rotation = Math.random() * 720 - 360;
        const endX = startX + (Math.cos(angle) * distance / 8);
        const endY = startY + (Math.sin(angle) * distance / 8);
        
        arm.animate([
            { 
                transform: 'translate(-50%, -50%) rotate(0deg)',
                opacity: 1 
            },
            { 
                transform: `translate(-50%, -50%) translate(${Math.cos(angle) * distance}px, ${Math.sin(angle) * distance}px) rotate(${rotation}deg)`,
                opacity: 0.9 
            }
        ], {
            duration: 1000 + Math.random() * 600,
            easing: 'cubic-bezier(0.215, 0.610, 0.355, 1)',
            fill: 'forwards'
        });
        
        // Endposition setzen
        setTimeout(() => {
            arm.style.left = `${endX}%`;
            arm.style.top = `${endY}%`;
            arm.style.transform = `rotate(${rotation}deg)`;
        }, 1000 + Math.random() * 600);
    }
    
    function createFlyingLeg(side) {
        const leg = document.createElement('div');
        leg.className = `body-part leg-part ${side}-leg-part`;
        
        leg.style.width = '30px';
        leg.style.height = '75px';
        
        // Startposition in der Mitte
        const startX = 50;
        const startY = 50;
        leg.style.left = `${startX}%`;
        leg.style.top = `${startY}%`;
        
        bodyPartsContainer.appendChild(leg);
        bodyParts.push({element: leg, type: 'leg', side: side});
        
        // Bein wird weggeschleudert
        const angle = (side === 'left' ? Math.PI * 0.8 : Math.PI * 1.2) + (Math.random() * 0.4 - 0.2);
        const distance = 120 + Math.random() * 180;
        const rotation = Math.random() * 540 - 270;
        const endX = startX + (Math.cos(angle) * distance / 8);
        const endY = startY + (Math.sin(angle) * distance / 8);
        
        leg.animate([
            { 
                transform: 'translate(-50%, -50%) rotate(0deg)',
                opacity: 1 
            },
            { 
                transform: `translate(-50%, -50%) translate(${Math.cos(angle) * distance}px, ${Math.sin(angle) * distance}px) rotate(${rotation}deg)`,
                opacity: 0.9 
            }
        ], {
            duration: 800 + Math.random() * 400,
            easing: 'cubic-bezier(0.215, 0.610, 0.355, 1)',
            fill: 'forwards'
        });
        
        // Endposition setzen
        setTimeout(() => {
            leg.style.left = `${endX}%`;
            leg.style.top = `${endY}%`;
            leg.style.transform = `rotate(${rotation}deg)`;
        }, 800 + Math.random() * 400);
    }
    
    function createFlyingHead() {
        const head = document.createElement('div');
        head.className = 'body-part head-part';
        
        head.style.width = '50px';
        head.style.height = '65px';
        
        // Startposition in der Mitte
        const startX = 50;
        const startY = 50;
        head.style.left = `${startX}%`;
        head.style.top = `${startY}%`;
        
        bodyPartsContainer.appendChild(head);
        bodyParts.push({element: head, type: 'head'});
        
        // Kopf wird weggeschleudert
        const angle = Math.PI * 1.5 + (Math.random() * 0.6 - 0.3);
        const distance = 100 + Math.random() * 150;
        const rotation = Math.random() * 360 - 180;
        const endX = startX + (Math.cos(angle) * distance / 8);
        const endY = startY + (Math.sin(angle) * distance / 8);
        
        head.animate([
            { 
                transform: 'translate(-50%, -50%) rotate(0deg)',
                opacity: 1 
            },
            { 
                transform: `translate(-50%, -50%) translate(${Math.cos(angle) * distance}px, ${Math.sin(angle) * distance}px) rotate(${rotation}deg)`,
                opacity: 0.9 
            }
        ], {
            duration: 600 + Math.random() * 300,
            easing: 'cubic-bezier(0.215, 0.610, 0.355, 1)',
            fill: 'forwards'
        });
        
        // Endposition setzen
        setTimeout(() => {
            head.style.left = `${endX}%`;
            head.style.top = `${endY}%`;
            head.style.transform = `rotate(${rotation}deg)`;
        }, 600 + Math.random() * 300);
    }
    
    function createFlyingTorso() {
        const torso = document.createElement('div');
        torso.className = 'body-part torso-part';
        
        torso.style.width = '100px';
        torso.style.height = '100px';
        
        // Startposition in der Mitte
        const startX = 50;
        const startY = 50;
        torso.style.left = `${startX}%`;
        torso.style.top = `${startY}%`;
        
        bodyPartsContainer.appendChild(torso);
        bodyParts.push({element: torso, type: 'torso'});
        
        // Torso wird weggeschleudert
        const angle = Math.PI * 1.0 + (Math.random() * 0.4 - 0.2);
        const distance = 80 + Math.random() * 120;
        const rotation = Math.random() * 180 - 90;
        const endX = startX + (Math.cos(angle) * distance / 8);
        const endY = startY + (Math.sin(angle) * distance / 8);
        
        torso.animate([
            { 
                transform: 'translate(-50%, -50%) rotate(0deg)',
                opacity: 1 
            },
            { 
                transform: `translate(-50%, -50%) translate(${Math.cos(angle) * distance}px, ${Math.sin(angle) * distance}px) rotate(${rotation}deg)`,
                opacity: 0.9 
            }
        ], {
            duration: 500 + Math.random() * 200,
            easing: 'cubic-bezier(0.215, 0.610, 0.355, 1)',
            fill: 'forwards'
        });
        
        // Endposition setzen
        setTimeout(() => {
            torso.style.left = `${endX}%`;
            torso.style.top = `${endY}%`;
            torso.style.transform = `rotate(${rotation}deg)`;
        }, 500 + Math.random() * 200);
    }
    
    function createBodyFragments() {
        // Zusätzliche Körperteil-Fragmente
        for (let i = 0; i < 10; i++) {
            setTimeout(() => {
                const fragment = document.createElement('div');
                fragment.className = 'body-part';
                
                const size = 20 + Math.random() * 40;
                fragment.style.width = `${size}px`;
                fragment.style.height = `${size * (0.3 + Math.random() * 0.7)}px`;
                
                // Zufällige Farbe für Fragmente
                const colors = ['#556B2F', '#3A4A21', '#36454F', '#2C2C2C'];
                fragment.style.background = colors[Math.floor(Math.random() * colors.length)];
                
                // Startposition in der Mitte
                const startX = 50;
                const startY = 50;
                fragment.style.left = `${startX}%`;
                fragment.style.top = `${startY}%`;
                
                bodyPartsContainer.appendChild(fragment);
                bodyParts.push({element: fragment, type: 'fragment'});
                
                // Fragment wird weggeschleudert
                const angle = Math.random() * Math.PI * 2;
                const distance = 60 + Math.random() * 200;
                const rotation = Math.random() * 900 - 450;
                const endX = startX + (Math.cos(angle) * distance / 10);
                const endY = startY + (Math.sin(angle) * distance / 10);
                
                fragment.animate([
                    { 
                        transform: 'translate(-50%, -50%) rotate(0deg)',
                        opacity: 1 
                    },
                    { 
                        transform: `translate(-50%, -50%) translate(${Math.cos(angle) * distance}px, ${Math.sin(angle) * distance}px) rotate(${rotation}deg)`,
                        opacity: 0.8 
                    }
                ], {
                    duration: 800 + Math.random() * 600,
                    easing: 'cubic-bezier(0.215, 0.610, 0.355, 1)',
                    fill: 'forwards'
                });
                
                // Endposition setzen
                setTimeout(() => {
                    fragment.style.left = `${endX}%`;
                    fragment.style.top = `${endY}%`;
                    fragment.style.transform = `rotate(${rotation}deg)`;
                }, 800 + Math.random() * 600);
            }, Math.random() * 1000);
        }
    }
    
    // Hund erstellen der die Körperteile frisst
    function createDog() {
        const dog = document.createElement('div');
        dog.className = 'dog';
        dogContainer.appendChild(dog);
        
        // Hund Körperteile
        const dogBody = document.createElement('div');
        dogBody.className = 'dog-body';
        dog.appendChild(dogBody);
        
        const dogHead = document.createElement('div');
        dogHead.className = 'dog-head';
        dog.appendChild(dogHead);
        
        const dogEarLeft = document.createElement('div');
        dogEarLeft.className = 'dog-ear dog-ear-left';
        dogHead.appendChild(dogEarLeft);
        
        const dogEarRight = document.createElement('div');
        dogEarRight.className = 'dog-ear dog-ear-right';
        dogHead.appendChild(dogEarRight);
        
        const dogSnout = document.createElement('div');
        dogSnout.className = 'dog-snout';
        dogHead.appendChild(dogSnout);
        
        const dogEyeLeft = document.createElement('div');
        dogEyeLeft.className = 'dog-eye dog-eye-left';
        dogHead.appendChild(dogEyeLeft);
        
        const dogEyeRight = document.createElement('div');
        dogEyeRight.className = 'dog-eye dog-eye-right';
        dogHead.appendChild(dogEyeRight);
        
        const dogTail = document.createElement('div');
        dogTail.className = 'dog-tail';
        dogBody.appendChild(dogTail);
        
        // Hundebeine
        const dogLegFL = document.createElement('div');
        dogLegFL.className = 'dog-leg dog-leg-front-left';
        dog.appendChild(dogLegFL);
        
        const dogLegFR = document.createElement('div');
        dogLegFR.className = 'dog-leg dog-leg-front-right';
        dog.appendChild(dogLegFR);
        
        const dogLegBL = document.createElement('div');
        dogLegBL.className = 'dog-leg dog-leg-back-left';
        dog.appendChild(dogLegBL);
        
        const dogLegBR = document.createElement('div');
        dogLegBR.className = 'dog-leg dog-leg-back-right';
        dog.appendChild(dogLegBR);
        
        // Hund von links hereinkommen lassen
        dog.style.left = '-100px';
        dog.style.top = '70%';
        
        // Hund läuft herein
        dog.animate([
            { left: '-100px', opacity: 1 },
            { left: '10%', opacity: 1 }
        ], {
            duration: 2000,
            easing: 'ease-out',
            fill: 'forwards'
        });
        
        // Nach dem Hereinlaufen beginnt der Hund zu fressen
        setTimeout(() => {
            startDogEating(dog);
        }, 2000);
    }
    
    function startDogEating(dog) {
        // Zufälliges Körperteil oder Organ zum Fressen auswählen
        const availableTargets = [...bodyParts, ...organs];
        if (availableTargets.length === 0) return;
        
        const target = availableTargets[Math.floor(Math.random() * availableTargets.length)];
        
        // Zum Ziel laufen
        const targetRect = target.element.getBoundingClientRect();
        const dogRect = dog.getBoundingClientRect();
        const targetX = (targetRect.left + targetRect.width / 2) / window.innerWidth * 100;
        const targetY = (targetRect.top + targetRect.height / 2) / window.innerHeight * 100;
        
        dog.animate([
            { left: `${dog.style.left}`, top: `${dog.style.top}` },
            { left: `${targetX - 5}%`, top: `${targetY}%` }
        ], {
            duration: 1500,
            easing: 'ease-in-out',
            fill: 'forwards'
        });
        
        // Fressanimation starten
        setTimeout(() => {
            dog.classList.add('dog-eating');
            
            // Ziel langsam verschwinden lassen (gefressen)
            target.element.animate([
                { opacity: 0.9, transform: target.element.style.transform },
                { opacity: 0, transform: `${target.element.style.transform} scale(0.5)` }
            ], {
                duration: 1000,
                easing: 'ease-in',
                fill: 'forwards'
            });
            
            // Ziel aus den Arrays entfernen
            if (target.type) {
                const index = bodyParts.indexOf(target);
                if (index > -1) bodyParts.splice(index, 1);
            } else {
                const index = organs.indexOf(target);
                if (index > -1) organs.splice(index, 1);
            }
            
            // Ziel nach Animation entfernen
            setTimeout(() => {
                target.element.remove();
                dog.classList.remove('dog-eating');
                
                // Nächstes Ziel suchen oder Hund gehen lassen
                if (bodyParts.length > 0 || organs.length > 0) {
                    startDogEating(dog);
                } else {
                    // Hund geht weg
                    dog.animate([
                        { left: `${dog.style.left}`, opacity: 1 },
                        { left: '110%', opacity: 0 }
                    ], {
                        duration: 2000,
                        easing: 'ease-in',
                        fill: 'forwards'
                    });
                    
                    setTimeout(() => {
                        dog.remove();
                    }, 2000);
                }
            }, 1000);
        }, 1500);
    }
    
    // Reset-Funktion
    resetButton.addEventListener('click', function() {
        // Text und Button ausblenden
        explosionText.classList.add('hidden');
        resetButton.classList.add('hidden');
        
        // Alle Container leeren
        bloodContainer.innerHTML = '';
        organsContainer.innerHTML = '';
        bodyPartsContainer.innerHTML = '';
        dogContainer.innerHTML = '';
        
        // Arrays leeren
        bodyParts = [];
        organs = [];
        
        // Explosions-Container zurücksetzen
        const explosionElements = explosionContainer.querySelectorAll('div');
        explosionElements.forEach(el => {
            el.style.width = '0';
            el.style.height = '0';
        });
        
        // Sparks Container leeren
        document.getElementById('sparks').innerHTML = '';
        
        // Bomber wieder anzeigen
        bomber.classList.remove('hidden');
    });
});
