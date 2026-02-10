// Базовая функциональность
document.addEventListener('DOMContentLoaded', function() {
    // Лайки
    document.querySelectorAll('.post-actions button').forEach(button => {
        button.addEventListener('click', function() {
            if (this.innerHTML.includes('Нравится')) {
                const post = this.closest('.post');
                const likeCount = post.querySelector('.post-stats span');
                const currentLikes = parseInt(likeCount.textContent) || 0;
                likeCount.innerHTML = `<i class="fas fa-thumbs-up"></i> ${currentLikes + 1}`;
                this.innerHTML = '<i class="fas fa-thumbs-up"></i> Вам нравится';
            }
        });
    });

    // Создание поста
    const postButton = document.querySelector('.btn-primary');
    const postTextarea = document.querySelector('.create-post textarea');
    
    if (postButton) {
        postButton.addEventListener('click', function() {
            const text = postTextarea.value.trim();
            if (text) {
                createPost(text);
                postTextarea.value = '';
            }
        });
    }

    // Поиск
    const searchInput = document.querySelector('.nav-search input');
    if (searchInput) {
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                alert('Поиск: ' + this.value);
                // Здесь будет реальный поиск
            }
        });
    }

    // Эмуляция онлайн статуса
    updateOnlineStatus();
    setInterval(updateOnlineStatus, 30000);
});

function createPost(text) {
    const mainContent = document.querySelector('.main-content');
    const posts = mainContent.querySelectorAll('.post');
    const firstPost = posts[0];
    
    const newPost = document.createElement('div');
    newPost.className = 'post';
    newPost.innerHTML = `
        <div class="post-header">
            <img src="https://ui-avatars.com/api/?name=Алексей+Иванов&background=4A90E2&color=fff" alt="Аватар">
            <div>
                <h4>Алексей Иванов <span>11 "А" класс</span></h4>
                <p>Только что</p>
            </div>
        </div>
        <div class="post-content">
            <p>${text}</p>
        </div>
        <div class="post-stats">
            <span><i class="fas fa-thumbs-up"></i> 0</span>
            <span>0 комментариев</span>
        </div>
        <div class="post-actions">
            <button><i class="fas fa-thumbs-up"></i> Нравится</button>
            <button><i class="fas fa-comment"></i> Комментировать</button>
            <button><i class="fas fa-share"></i> Поделиться</button>
        </div>
    `;
    
    if (firstPost) {
        mainContent.insertBefore(newPost, firstPost.nextSibling);
    } else {
        mainContent.appendChild(newPost);
    }
}

function updateOnlineStatus() {
    const onlineCount = Math.floor(Math.random() * 5) + 6;
    const onlineTitle = document.querySelector('.online-friends h3');
    if (onlineTitle) {
        onlineTitle.innerHTML = `<i class="fas fa-circle online"></i> Друзья онлайн (${onlineCount})`;
    }
}