const minerals = [
    // 신화 등급 (0.05%)
    { name: '시공의 결정', color: '#FF00FF', rarity: 0.008 },
    { name: '영원의 파편', color: '#00FFFF', rarity: 0.009 },
    { name: '우주의 눈물', color: '#FFD700', rarity: 0.01 },
    { name: '신의 축복석', color: '#FF1493', rarity: 0.011 },
    { name: '차원의 핵', color: '#00FF00', rarity: 0.012 },
    
    // 전설 등급 (0.2%)
    { name: '엄청 짱큰 돌', color: '#FFD700', rarity: 0.015 },
    { name: '엄청 멋있는 돌', color: '#FF6B6B', rarity: 0.017 },
    { name: '용의 심장석', color: '#DC143C', rarity: 0.018 },
    { name: '불사조의 깃털석', color: '#FF4500', rarity: 0.019 },
    { name: '달빛 수정', color: '#E0E0E0', rarity: 0.021 },
    { name: '태양의 정수', color: '#FFA500', rarity: 0.022 },
    { name: '별똥별 조각', color: '#FFE4B5', rarity: 0.023 },
    { name: '심연의 보석', color: '#000080', rarity: 0.024 },
    { name: '천상의 다이아', color: '#87CEEB', rarity: 0.02 },
    { name: '무지개 크리스탈', color: '#FF69B4', rarity: 0.021 },
    
    // 영웅 등급 (0.8%)
    { name: '빛나는 사파이어', color: '#1E90FF', rarity: 0.07 },
    { name: '완벽한 루비', color: '#DC143C', rarity: 0.075 },
    { name: '투명한 다이아몬드', color: '#B9F2FF', rarity: 0.08 },
    { name: '신비한 에메랄드', color: '#00C851', rarity: 0.082 },
    { name: '얼음 수정', color: '#00CED1', rarity: 0.085 },
    { name: '번개 석영', color: '#FFFF00', rarity: 0.078 },
    { name: '화염 오팔', color: '#FF6347', rarity: 0.083 },
    { name: '바람의 보석', color: '#98FB98', rarity: 0.088 },
    { name: '대지의 핵석', color: '#8B4513', rarity: 0.076 },
    { name: '암흑 자수정', color: '#4B0082', rarity: 0.083 },
    
    // 희귀 등급 (3%)
    { name: '큰 자수정', color: '#9B59B6', rarity: 0.25 },
    { name: '반짝이는 토파즈', color: '#F39C12', rarity: 0.28 },
    { name: '맑은 오팔', color: '#1ABC9C', rarity: 0.32 },
    { name: '깨끗한 석영', color: '#BDC3C7', rarity: 0.35 },
    { name: '작은 사파이어', color: '#3498DB', rarity: 0.29 },
    { name: '푸른 수정', color: '#4169E1', rarity: 0.33 },
    { name: '붉은 마노', color: '#CD5C5C', rarity: 0.27 },
    { name: '초록 비취', color: '#2E8B57', rarity: 0.31 },
    { name: '노란 호박', color: '#DAA520', rarity: 0.26 },
    { name: '보라 형석', color: '#8A2BE2', rarity: 0.34 },
    
    // 고급 등급 (8%)
    { name: '평범한 자수정', color: '#8E44AD', rarity: 0.75 },
    { name: '흐린 토파즈', color: '#E67E22', rarity: 0.82 },
    { name: '작은 에메랄드', color: '#27AE60', rarity: 0.78 },
    { name: '작은 루비', color: '#E74C3C', rarity: 0.85 },
    { name: '탁한 오팔', color: '#16A085', rarity: 0.73 },
    { name: '일반 수정', color: '#95A5A6', rarity: 0.88 },
    { name: '작은 진주', color: '#F5F5DC', rarity: 0.76 },
    { name: '산호 조각', color: '#FF7F50', rarity: 0.81 },
    { name: '청록석', color: '#40E0D0', rarity: 0.79 },
    { name: '감람석', color: '#9ACD32', rarity: 0.83 },
    
    // 일반 등급 (18%)
    { name: '조약돌', color: '#95A5A6', rarity: 1.65 },
    { name: '작은 돌', color: '#7F8C8D', rarity: 1.72 },
    { name: '평범한 석영', color: '#BDC3C7', rarity: 1.85 },
    { name: '거친 돌', color: '#636E72', rarity: 1.78 },
    { name: '깨진 석영', color: '#95A5A6', rarity: 1.88 },
    { name: '회색 돌', color: '#808080', rarity: 1.92 },
    { name: '강돌', color: '#778899', rarity: 1.68 },
    { name: '자갈', color: '#696969', rarity: 1.95 },
    { name: '모래석', color: '#C0C0C0', rarity: 1.82 },
    { name: '진흙석', color: '#8B7355', rarity: 1.75 },
    
    // 흔함 등급 (25%)
    { name: '엄청 작은 돌', color: '#A9A9A9', rarity: 2.35 },
    { name: '멋없는 돌', color: '#696969', rarity: 2.48 },
    { name: '평범한 돌', color: '#778899', rarity: 2.52 },
    { name: '그냥 돌', color: '#708090', rarity: 2.65 },
    { name: '흔한 자갈', color: '#A9A9A9', rarity: 2.42 },
    { name: '길바닥 돌', color: '#808080', rarity: 2.58 },
    { name: '먼지 덩어리', color: '#D3D3D3', rarity: 2.38 },
    { name: '부서진 돌', color: '#BEBEBE', rarity: 2.55 },
    { name: '낡은 석편', color: '#C0C0C0', rarity: 2.45 },
    { name: '바위 조각', color: '#696969', rarity: 2.62 },
    
    // 매우 흔함 (45.05%)
    { name: '돌멩이', color: '#A9A9A9', rarity: 4.35 },
    { name: '작은 자갈', color: '#808080', rarity: 4.62 },
    { name: '모래알', color: '#D3D3D3', rarity: 4.48 },
    { name: '먼지', color: '#DCDCDC', rarity: 4.75 },
    { name: '흙덩이', color: '#8B7355', rarity: 4.28 },
    { name: '깨진 조약돌', color: '#778899', rarity: 4.55 },
    { name: '이끼 낀 돌', color: '#556B2F', rarity: 4.38 },
    { name: '젖은 돌', color: '#696969', rarity: 4.68 },
    { name: '마른 돌', color: '#A9A9A9', rarity: 4.42 },
    { name: '평범한 모래', color: '#F5DEB3', rarity: 4.54 }
];

let inventory = [];
let gold = 10000;
let activeItems = [];
let autoPullEnabled = false;

const craftRecipes = [
    { name: '시간 가속기', effect: '뽑기 속도 2배 빠르게', cost: { '평범한 돌': 50, '조약돌': 30 }, iconClass: 'icon-clock' },
    { name: '행운의 부적', effect: '희귀 등급 확률 2배', cost: { '큰 자수정': 10, '반짝이는 토파즈': 10 }, iconClass: 'icon-clover' },
    { name: '황금 나침반', effect: '전설 등급 확률 1.5배', cost: { '빛나는 사파이어': 5, '완벽한 루비': 5 }, iconClass: 'icon-compass' },
    { name: '신의 축복', effect: '신화 등급 확률 3배', cost: { '용의 심장석': 3, '달빛 수정': 3, '태양의 정수': 3 }, iconClass: 'icon-star' },
    { name: '천상의 열쇠', effect: '모든 희귀 확률 소폭 증가', cost: { '그냥 돌': 100, '멋없는 돌': 100 }, iconClass: 'icon-key' }
];

const goldShopItems = [
    { name: '자동 뽑기', effect: '1초마다 자동으로 뽑기', price: 500 },
    { name: '골드 자석', effect: '뽑기할 때마다 골드 1~10G 획득', price: 1000 },
    { name: '골드 부스터', effect: '판매 가격 2배', price: 1500 },
    { name: '행운의 주사위', effect: '모든 확률 1.5배', price: 3000 },
    { name: '시간 왜곡', effect: '뽑기 속도 5배', price: 5000 },
    { name: '전설의 자석', effect: '전설 이상 확률 3배', price: 10000 },
    { name: '무한의 축복', effect: '모든 등급 확률 2배', price: 50000 }
];

function getRandomMineral() {
    const random = Math.random() * 100;
    let cumulative = 0;
    
    for (let i = 0; i < minerals.length; i++) {
        cumulative += minerals[i].rarity;
        if (random < cumulative) {
            return minerals[i];
        }
    }
    return minerals[minerals.length - 1];
}

let sortAscending = true;

function updateCollectionDisplay() {
    const grid = document.getElementById('collection-grid');
    grid.innerHTML = '';
    
    const sortedMinerals = [...minerals].sort((a, b) => {
        return sortAscending ? a.rarity - b.rarity : b.rarity - a.rarity;
    });
    
    sortedMinerals.forEach(mineral => {
        const slot = document.createElement('div');
        slot.className = 'inventory-slot ' + getRarityClass(mineral.rarity);
        slot.textContent = mineral.name + '\n(' + mineral.rarity + '%)';
        slot.style.color = mineral.color;
        grid.appendChild(slot);
    });
    
    for (let i = sortedMinerals.length; i < 400; i++) {
        const slot = document.createElement('div');
        slot.className = 'inventory-slot';
        grid.appendChild(slot);
    }
}

function getRarityClass(rarity) {
    if (rarity <= 0.05) return 'rarity-mythic';
    if (rarity <= 0.2) return 'rarity-legendary';
    if (rarity <= 1) return 'rarity-epic';
    if (rarity <= 3) return 'rarity-rare';
    if (rarity <= 10) return 'rarity-uncommon';
    return 'rarity-common';
}

function updateInventoryDisplay() {
    const grid = document.getElementById('inventory-grid');
    grid.innerHTML = '';
    
    const mineralCount = {};
    inventory.forEach(mineral => {
        const key = mineral.name;
        if (!mineralCount[key]) {
            mineralCount[key] = { mineral: mineral, count: 0 };
        }
        mineralCount[key].count++;
    });
    
    let index = 0;
    for (let key in mineralCount) {
        const slot = document.createElement('div');
        slot.className = 'inventory-slot ' + getRarityClass(mineralCount[key].mineral.rarity);
        const data = mineralCount[key];
        slot.textContent = data.mineral.name + ' x' + data.count + '\n(' + data.mineral.rarity + '%)';
        slot.style.color = data.mineral.color;
        grid.appendChild(slot);
        index++;
    }
    
    for (let i = index; i < 400; i++) {
        const slot = document.createElement('div');
        slot.className = 'inventory-slot';
        grid.appendChild(slot);
    }
}

document.getElementById('toggle-sidebar').addEventListener('click', function() {
    const sidebar = document.querySelector('.side-menu');
    sidebar.classList.toggle('hidden');
});

function createParticles(color) {
    const resultText = document.getElementById('result-text');
    const rect = resultText.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.backgroundColor = color;
        particle.style.left = (centerX - 5) + 'px';
        particle.style.top = (centerY - 5) + 'px';
        
        const angle = (Math.PI * 2 * i) / 30;
        const velocity = 100 + Math.random() * 100;
        const tx = Math.cos(angle) * velocity;
        const ty = Math.sin(angle) * velocity;
        
        particle.style.setProperty('--tx', tx + 'px');
        particle.style.setProperty('--ty', ty + 'px');
        
        document.body.appendChild(particle);
        
        setTimeout(() => particle.remove(), 2000);
    }
}

document.getElementById('pull-button').addEventListener('click', function() {
    const resultText = document.getElementById('result-text');
    const button = this;
    
    button.disabled = true;
    
    let count = 0;
    let delay = 50;
    
    function spin() {
        const randomMineral = minerals[Math.floor(Math.random() * minerals.length)];
        resultText.textContent = randomMineral.name + ' -- ' + randomMineral.rarity + '%';
        resultText.style.color = randomMineral.color;
        resultText.classList.remove('shake');
        void resultText.offsetWidth;
        resultText.classList.add('shake');
        
        count++;
        delay += 30;
        
        if (count < 15) {
            setTimeout(spin, delay);
        } else {
            const finalMineral = getRandomMineral();
            resultText.textContent = finalMineral.name + ' -- ' + finalMineral.rarity + '%';
            resultText.style.color = finalMineral.color;
            resultText.classList.remove('shake');
            void resultText.offsetWidth;
            resultText.classList.add('shake');
            createParticles(finalMineral.color);
            
            inventory.push(finalMineral);
            
            if (activeItems.some(item => item.name === '골드 자석')) {
                const goldGain = Math.floor(Math.random() * 10) + 1;
                gold += goldGain;
            }
            
            button.disabled = false;
            
            if (autoPullEnabled && activeItems.some(item => item.name === '자동 뽑기')) {
                setTimeout(() => {
                    if (!button.disabled) {
                        button.click();
                    }
                }, 100);
            }
        }
    }
    
    spin();
});

document.getElementById('settings-btn').addEventListener('click', function() {
    alert('설정 메뉴');
});

document.getElementById('inventory-btn').addEventListener('click', function() {
    updateInventoryDisplay();
    document.getElementById('inventory-panel').classList.remove('hidden');
});

document.getElementById('close-inventory').addEventListener('click', function() {
    document.getElementById('inventory-panel').classList.add('hidden');
});

document.getElementById('collection-btn').addEventListener('click', function() {
    updateCollectionDisplay();
    document.getElementById('collection-panel').classList.remove('hidden');
});

document.getElementById('close-collection').addEventListener('click', function() {
    document.getElementById('collection-panel').classList.add('hidden');
});

document.getElementById('sort-toggle').addEventListener('click', function() {
    sortAscending = !sortAscending;
    this.textContent = sortAscending ? '정렬: 희귀도 낮은순' : '정렬: 희귀도 높은순';
    updateCollectionDisplay();
});

document.getElementById('sell-btn').addEventListener('click', function() {
    updateSellDisplay();
    document.getElementById('sell-panel').classList.remove('hidden');
});

document.getElementById('close-sell').addEventListener('click', function() {
    document.getElementById('sell-panel').classList.add('hidden');
});

document.getElementById('shop-btn').addEventListener('click', function() {
    updateCraftDisplay();
    document.getElementById('shop-panel').classList.remove('hidden');
});

document.getElementById('close-shop').addEventListener('click', function() {
    document.getElementById('shop-panel').classList.add('hidden');
});

function updateSellDisplay() {
    const sellGrid = document.getElementById('sell-grid');
    sellGrid.innerHTML = '<p style="color: #cccccc; margin-bottom: 10px;">골드: ' + gold + 'G</p>';
    
    const mineralCount = {};
    inventory.forEach(mineral => {
        const key = mineral.name;
        if (!mineralCount[key]) {
            mineralCount[key] = { mineral: mineral, count: 0 };
        }
        mineralCount[key].count++;
    });
    
    for (let key in mineralCount) {
        const data = mineralCount[key];
        const sellPrice = Math.floor(data.mineral.rarity * 10);
        const item = document.createElement('div');
        item.className = 'shop-item';
        item.innerHTML = '<h4>' + data.mineral.name + ' x' + data.count + '</h4><p>판매가: ' + sellPrice + 'G</p>';
        item.style.color = data.mineral.color;
        item.onclick = () => {
            const index = inventory.findIndex(m => m.name === data.mineral.name);
            if (index !== -1) {
                inventory.splice(index, 1);
                gold += sellPrice;
                updateSellDisplay();
            }
        };
        sellGrid.appendChild(item);
    }
}

function updateCraftDisplay() {
    const craftGrid = document.getElementById('craft-grid');
    craftGrid.innerHTML = '<p style="color: #cccccc; margin-bottom: 10px;">골드: ' + gold + 'G</p>';
    
    const mineralCount = {};
    inventory.forEach(mineral => {
        const key = mineral.name;
        if (!mineralCount[key]) {
            mineralCount[key] = { mineral: mineral, count: 0 };
        }
        mineralCount[key].count++;
    });
    
    const ownedItems = activeItems.map(item => item.name);
    
    craftGrid.innerHTML += '<h3 style="color: #FFD700; margin: 15px 0 10px 0;">광석 제작</h3>';
    
    const sortedCraftRecipes = [...craftRecipes].sort((a, b) => {
        const aOwned = ownedItems.includes(a.name);
        const bOwned = ownedItems.includes(b.name);
        if (aOwned && !bOwned) return 1;
        if (!aOwned && bOwned) return -1;
        return 0;
    });
    
    sortedCraftRecipes.forEach(recipe => {
        const item = document.createElement('div');
        item.className = 'shop-item';
        let costText = '';
        let canCraft = true;
        const isOwned = ownedItems.includes(recipe.name);
        
        for (let mineralName in recipe.cost) {
            const needed = recipe.cost[mineralName];
            const has = mineralCount[mineralName] ? mineralCount[mineralName].count : 0;
            costText += mineralName + ': ' + has + '/' + needed + ' ';
            if (has < needed) canCraft = false;
        }
        
        item.innerHTML = '<div><h4 style="margin: 0 0 5px 0;">' + recipe.name + (isOwned ? ' [소유중]' : '') + '</h4><p style="margin: 3px 0;">' + recipe.effect + '</p><p style="margin: 3px 0;">필요: ' + costText + '</p><p style="margin: 3px 0;">영구 장착</p></div>';
        item.style.opacity = (canCraft && !isOwned) ? '1' : '0.5';
        
        if (canCraft && !isOwned) {
            item.onclick = () => {
                for (let mineralName in recipe.cost) {
                    const needed = recipe.cost[mineralName];
                    for (let i = 0; i < needed; i++) {
                        const index = inventory.findIndex(m => m.name === mineralName);
                        if (index !== -1) inventory.splice(index, 1);
                    }
                }
                activeItems.push({ ...recipe });
                alert(recipe.name + ' 제작 완료!');
                updateCraftDisplay();
            };
        }
        
        craftGrid.appendChild(item);
    });
    
    craftGrid.innerHTML += '<h3 style="color: #FFD700; margin: 15px 0 10px 0;">골드 상점</h3>';
    
    const sortedGoldItems = [...goldShopItems].sort((a, b) => {
        const aOwned = ownedItems.includes(a.name);
        const bOwned = ownedItems.includes(b.name);
        if (aOwned && !bOwned) return 1;
        if (!aOwned && bOwned) return -1;
        return a.price - b.price;
    });
    
    sortedGoldItems.forEach(item => {
        const shopItem = document.createElement('div');
        shopItem.className = 'shop-item';
        const canBuy = gold >= item.price;
        const isOwned = ownedItems.includes(item.name);
        
        shopItem.innerHTML = '<div><h4 style="margin: 0 0 5px 0;">' + item.name + (isOwned ? ' [소유중]' : '') + '</h4><p style="margin: 3px 0;">' + item.effect + '</p><p style="margin: 3px 0;">가격: ' + item.price + 'G</p><p style="margin: 3px 0;">영구 장착</p></div>';
        shopItem.style.opacity = (canBuy && !isOwned) ? '1' : '0.5';
        
        if (canBuy && !isOwned) {
            shopItem.onclick = () => {
                gold -= item.price;
                activeItems.push({ ...item });
                alert(item.name + ' 구매 완료!');
                
                if (item.name === '자동 뽑기') {
                    document.getElementById('auto-pull-toggle').style.display = 'block';
                }
                
                updateCraftDisplay();
            };
        }
        
        craftGrid.appendChild(shopItem);
    });
}

document.getElementById('auto-pull-toggle').addEventListener('click', function() {
    autoPullEnabled = !autoPullEnabled;
    this.textContent = autoPullEnabled ? 'AUTO: ON' : 'AUTO: OFF';
    this.style.backgroundColor = autoPullEnabled ? '#4CAF50' : '#2d2d30';
    
    if (autoPullEnabled) {
        const button = document.getElementById('pull-button');
        if (!button.disabled) {
            button.click();
        }
    }
});
