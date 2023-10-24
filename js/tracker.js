if (typeof sessionStorage !== 'undefined') {
        if (!sessionStorage.getItem('firstVisitTime')) {
            const currentTime = new Date();
            sessionStorage.setItem('firstVisitTime', currentTime);
        }
    
        const sessionTimeSpan = document.getElementById('sessiontime');
    
        const updateTimeSpent = () => {
            const currentTime = new Date();
            const firstVisitTime = new Date(sessionStorage.getItem('firstVisitTime'));
            const timeSpentInSeconds = Math.floor((currentTime - firstVisitTime) / 1000);
    
            const minutes = Math.floor(timeSpentInSeconds / 60);
            const seconds = timeSpentInSeconds % 60;
    
            if (minutes > 0) {
                sessionTimeSpan.textContent = `${minutes} m and ${seconds} s`;
            } else {
                sessionTimeSpan.textContent = `${seconds} s`;
            }
        };
    
        updateTimeSpent();
        setInterval(updateTimeSpent, 1000);
    } else {
        console.error('Session storage is not supported by this browser.');
    }
