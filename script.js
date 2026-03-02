const minerals = [
    // 유강민 등급 (0.00000000000000001%)
    { name: '유강민', color: '#000000', rarity: 0.00000000000000001 },
    
    // 창조 등급 (0.0000001%)
    { name: '창조', color: '#FFFFFF', rarity: 0.0000001 },
    
    // 영겁 등급 (0.00001%)
    { name: '영겁의 파편 I', color: '#00FF00', rarity: 0.000002 },
    { name: '영겁의 파편 II', color: '#000000', rarity: 0.000002 },
    { name: '영겁의 파편 III', color: '#7FFF00', rarity: 0.000002 },
    { name: '영겁의 파편 IV', color: '#FFFF00', rarity: 0.000002 },
    { name: '영겁의 파편 V', color: '#32CD32', rarity: 0.000002 },
    
    // 무현 등급 (0.0000523%)
    { name: '노무현', color: '#FF00FF', rarity: 0.0000523 },
    
    // 초월 단계 (0.001%)
    { name: '초월의 정수', color: '#FFFFFF', rarity: 0.0005 },
    { name: '초월의 핵', color: '#000000', rarity: 0.0005 },
    
    // 크로마틱 등급 (0.006%)
    { name: '크로마틱 크리스탈', color: '#FF1493', rarity: 0.002 },
    { name: '크로마틱 에센스', color: '#FF8C00', rarity: 0.002 },
    { name: '크로마틱 코어', color: '#FFD700', rarity: 0.002 },
    
    // 마스터 등급 (0.01%)
    { name: '천상의 정수', color: '#87CEEB', rarity: 0.005 },
    { name: '우주의 핵', color: '#4169E1', rarity: 0.005 },
    
    // 고귀 등급 (12.5%)
    { name: '다이아몬드', color: '#B9F2FF', rarity: 2.0 },
    { name: '루비', color: '#E0115F', rarity: 1.8 },
    { name: '사파이어', color: '#0F52BA', rarity: 1.6 },
    { name: '토파즈', color: '#FFC87C', rarity: 1.5 },
    { name: '자수정', color: '#9966CC', rarity: 1.5 },
    { name: '탄자나이트', color: '#40E0D0', rarity: 1.4 },
    { name: '오팔', color: '#A8C3BC', rarity: 1.4 },
    { name: '호박', color: '#FFBF00', rarity: 1.3 },
    
    // 에픽 등급 (6.25%)
    { name: '흑요석', color: '#1C1C1C', rarity: 0.9 },
    { name: '월장석', color: '#E8E8E8', rarity: 0.9 },
    { name: '라피스 라줄리', color: '#2E5090', rarity: 0.9 },
    { name: '말라카이트', color: '#0BDA51', rarity: 0.9 },
    { name: '터키석', color: '#30D5C8', rarity: 0.9 },
    { name: '석류석', color: '#8B0000', rarity: 0.9 },
    { name: '아쿠아마린', color: '#7FFFD4', rarity: 0.85 },
    
    // 전설 등급 (3.125%)
    { name: '용의 심장석', color: '#FF4500', rarity: 0.8 },
    { name: '달빛 수정', color: '#E0E0FF', rarity: 0.8 },
    { name: '태양의 정수', color: '#FFD700', rarity: 0.8 },
    { name: '별의 파편', color: '#FFFACD', rarity: 0.725 },
    
    // 신화 등급 (0.8%)
    { name: '세계수의 가지', color: '#00FF7F', rarity: 0.27 },
    { name: '불사조의 깃털', color: '#FF6347', rarity: 0.27 },
    { name: '신의 눈물', color: '#87CEEB', rarity: 0.26 },
    
    // 불멸 등급 (0.1%)
    { name: '시간의 파편', color: '#8B00FF', rarity: 0.034 },
    { name: '공허의 심장', color: '#DC143C', rarity: 0.033 },
    { name: '영원의 불꽃', color: '#FF1493', rarity: 0.033 },
    
    // 희귀 등급 (25%)
    { name: '에메랄드', color: '#50C878', rarity: 7 },
    { name: '비취', color: '#7CFC00', rarity: 6 },
    { name: '페리도트', color: '#9ACD32', rarity: 5 },
    { name: '옥', color: '#00A86B', rarity: 4 },
    { name: '녹주석', color: '#32CD32', rarity: 3 },
    
    // 일반 등급 (50%)
    { name: '돌', color: '#95A5A6', rarity: 15 },
    { name: '자갈', color: '#7F8C8D', rarity: 15 },
    { name: '조약돌', color: '#BDC3C7', rarity: 10 },
    { name: '화강암', color: '#A9A9A9', rarity: 10 }
];

let inventory = [];
let gold = 999999999;
let activeItems = [];
let autoPullEnabled = false;
let stats = {
    playTime: 0,
    totalPulls: 0,
    totalMinerals: 0,
    totalSold: 0,
    totalGoldEarned: 0,
    luck: 100,
    speed: 100
};

const craftRecipes = [
];

const goldShopItems = [
    { name: '자동 뽑기', effect: '1초마다 자동으로 뽑기', price: 5000 },
    { name: '골드 자석', effect: '뽑기할 때마다 골드 1~10G 획득', price: 10000 },
    { name: '골드 부스터', effect: 'LUCK +25', price: 25000 },
    { name: '시간 왜곡', effect: 'SPD +25', price: 75000 },
    { name: '무하한', effect: 'SPD +500', price: 500000 }
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
let inventorySortAscending = true;

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
    if (rarity < 0.0000000001) return 'rarity-yukangmin';
    if (rarity < 0.000001) return 'rarity-creation';
    if (rarity < 0.00001) return 'rarity-eternity';
    if (rarity < 0.0001) return 'rarity-infinite';
    if (rarity < 0.001) return 'rarity-transcendence';
    if (rarity < 0.005) return 'rarity-chromatic';
    if (rarity < 0.01) return 'rarity-master';
    if (rarity < 0.1) return 'rarity-transcendent';
    if (rarity < 0.3) return 'rarity-mythic';
    if (rarity < 0.85) return 'rarity-legendary';
    if (rarity < 1.0) return 'rarity-epic';
    if (rarity <= 2.0) return 'rarity-noble';
    if (rarity <= 7) return 'rarity-uncommon';
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
    
    const sortedMinerals = Object.values(mineralCount).sort((a, b) => {
        return inventorySortAscending ? a.mineral.rarity - b.mineral.rarity : b.mineral.rarity - a.mineral.rarity;
    });
    
    let index = 0;
    sortedMinerals.forEach(data => {
        const slot = document.createElement('div');
        slot.className = 'inventory-slot ' + getRarityClass(data.mineral.rarity);
        slot.textContent = data.mineral.name + ' x' + data.count + '\n(' + data.mineral.rarity + '%)';
        slot.style.color = data.mineral.color;
        grid.appendChild(slot);
        index++;
    });
    
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
    
    let currentSpeed = 100;
    if (activeItems.some(item => item.name === '시간 왜곡')) currentSpeed += 25;
    if (activeItems.some(item => item.name === '무하한')) currentSpeed += 500;
    const speedMultiplier = currentSpeed / 100;
    
    let count = 0;
    let delay = 50 / speedMultiplier;
    
    function spin() {
        const randomMineral = minerals[Math.floor(Math.random() * minerals.length)];
        resultText.textContent = randomMineral.name + ' -- ' + randomMineral.rarity + '%';
        resultText.style.color = randomMineral.color;
        resultText.classList.remove('shake');
        void resultText.offsetWidth;
        resultText.classList.add('shake');
        
        count++;
        delay += 30 / speedMultiplier;
        
        if (count < 15) {
            setTimeout(spin, delay);
        } else {
            const finalMineral = getRandomMineral();
            let resultString = finalMineral.name + ' -- ' + finalMineral.rarity + '%';
            
            const hasGoldMagnet = activeItems.some(item => item.name === '골드 자석');
            console.log('골드 자석 보유:', hasGoldMagnet, 'activeItems:', activeItems);
            
            if (hasGoldMagnet) {
                const goldGain = Math.floor(Math.random() * 10) + 1;
                gold += goldGain;
                stats.totalGoldEarned += goldGain;
                resultString += '\n+' + goldGain + 'G';
                console.log('골드 획득:', goldGain, '총 골드:', gold);
            }
            
            resultText.textContent = resultString;
            resultText.style.color = finalMineral.color;
            resultText.classList.remove('shake');
            void resultText.offsetWidth;
            resultText.classList.add('shake');
            createParticles(finalMineral.color);
            
            inventory.push(finalMineral);
            stats.totalPulls++;
            stats.totalMinerals++;
            
            if (!document.getElementById('inventory-panel').classList.contains('hidden')) {
                updateInventoryDisplay();
            }
            if (!document.getElementById('stats-panel').classList.contains('hidden')) {
                updateStatsDisplay();
            }
            if (!document.getElementById('sell-panel').classList.contains('hidden')) {
                updateSellDisplay();
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

document.getElementById('inventory-sort-toggle').addEventListener('click', function() {
    inventorySortAscending = !inventorySortAscending;
    this.textContent = inventorySortAscending ? '정렬: 희귀도 낮은순' : '정렬: 희귀도 높은순';
    updateInventoryDisplay();
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
    
    let currentLuck = 100;
    if (activeItems.some(item => item.name === '골드 부스터')) currentLuck += 25;
    const luckMultiplier = currentLuck / 100;
    
    for (let key in mineralCount) {
        const data = mineralCount[key];
        let sellPrice;
        
        // 등급별 판매가 설정
        if (data.mineral.rarity < 0.0000000001) sellPrice = 100000000000000000; // 유강민
        else if (data.mineral.rarity < 0.000001) sellPrice = 572013700; // 창조
        else if (data.mineral.rarity < 0.00001) sellPrice = 10000000; // 영겁
        else if (data.mineral.rarity < 0.0001) sellPrice = 5230000; // 무현
        else if (data.mineral.rarity < 0.001) sellPrice = 1000000; // 초월
        else if (data.mineral.rarity < 0.005) sellPrice = 500000; // 크로마틱
        else if (data.mineral.rarity < 0.01) sellPrice = 100000; // 마스터
        else if (data.mineral.rarity < 0.1) sellPrice = 50000; // 불멸
        else if (data.mineral.rarity < 0.3) sellPrice = 10000; // 신화
        else if (data.mineral.rarity < 0.85) sellPrice = 5000; // 전설
        else if (data.mineral.rarity < 1.0) sellPrice = 1000; // 에픽
        else if (data.mineral.rarity <= 2.0) sellPrice = 500; // 고귀
        else if (data.mineral.rarity <= 7) sellPrice = 100; // 희귀
        else sellPrice = 10; // 일반
        
        sellPrice = Math.floor(sellPrice * luckMultiplier);
        const item = document.createElement('div');
        item.className = 'shop-item';
        item.innerHTML = '<h4>' + data.mineral.name + ' x' + data.count + '</h4><p>판매가: ' + sellPrice + 'G</p>';
        item.style.color = data.mineral.color;
        item.onclick = () => {
            document.getElementById('sell-confirm-panel').classList.remove('hidden');
            const confirmContent = document.getElementById('sell-confirm-content');
            confirmContent.innerHTML = `
                <div style="text-align: center;">
                    <h3 style="color: ${data.mineral.color}; margin-bottom: 20px;">${data.mineral.name}</h3>
                    <p style="margin: 10px 0;">보유 수량: ${data.count}개</p>
                    <p style="margin: 10px 0;">희귀도: ${data.mineral.rarity}%</p>
                    <p style="margin: 10px 0; font-size: 1.2em; color: #FFD700;">판매가: ${sellPrice}G</p>
                    <button id="confirm-sell-btn" class="menu-btn" style="margin-top: 20px; width: 100%;">판매 확정</button>
                </div>
            `;
            
            document.getElementById('confirm-sell-btn').onclick = () => {
                const index = inventory.findIndex(m => m.name === data.mineral.name);
                if (index !== -1) {
                    inventory.splice(index, 1);
                    gold += sellPrice;
                    stats.totalSold++;
                    stats.totalGoldEarned += sellPrice;
                    document.getElementById('sell-confirm-panel').classList.add('hidden');
                    updateSellDisplay();
                    if (!document.getElementById('inventory-panel').classList.contains('hidden')) {
                        updateInventoryDisplay();
                    }
                    if (!document.getElementById('stats-panel').classList.contains('hidden')) {
                        updateStatsDisplay();
                    }
                }
            };
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

document.getElementById('stats-btn').addEventListener('click', function() {
    updateStatsDisplay();
    document.getElementById('stats-panel').classList.remove('hidden');
});

document.getElementById('close-stats').addEventListener('click', function() {
    document.getElementById('stats-panel').classList.add('hidden');
});

function updateStatsDisplay() {
    const statsContent = document.getElementById('stats-content');
    const days = Math.floor(stats.playTime / 86400);
    const hours = Math.floor((stats.playTime % 86400) / 3600);
    const minutes = Math.floor((stats.playTime % 3600) / 60);
    const seconds = stats.playTime % 60;
    
    stats.luck = 100;
    if (activeItems.some(item => item.name === '골드 부스터')) stats.luck += 25;
    
    stats.speed = 100;
    if (activeItems.some(item => item.name === '시간 왜곡')) stats.speed += 25;
    if (activeItems.some(item => item.name === '무하한')) stats.speed += 500;
    
    statsContent.innerHTML = `
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px;">
            <div style="background: #2d2d30; padding: 15px; border-radius: 5px; border: 1px solid #3e3e42;">
                <div style="color: #888; font-size: 0.9em;">플레이 시간</div>
                <div style="color: #FFD700; font-size: 1.3em; margin-top: 5px;">${days}일 ${hours}시간 ${minutes}분 ${seconds}초</div>
            </div>
            <div style="background: #2d2d30; padding: 15px; border-radius: 5px; border: 1px solid #3e3e42;">
                <div style="color: #888; font-size: 0.9em;">총 돌린 수</div>
                <div style="color: #FFD700; font-size: 1.3em; margin-top: 5px;">${stats.totalPulls}회</div>
            </div>
            <div style="background: #2d2d30; padding: 15px; border-radius: 5px; border: 1px solid #3e3e42;">
                <div style="color: #888; font-size: 0.9em;">뽑은 광석 수</div>
                <div style="color: #FFD700; font-size: 1.3em; margin-top: 5px;">${stats.totalMinerals}개</div>
            </div>
            <div style="background: #2d2d30; padding: 15px; border-radius: 5px; border: 1px solid #3e3e42;">
                <div style="color: #888; font-size: 0.9em;">판 광석 수</div>
                <div style="color: #FFD700; font-size: 1.3em; margin-top: 5px;">${stats.totalSold}개</div>
            </div>
            <div style="background: #2d2d30; padding: 15px; border-radius: 5px; border: 1px solid #3e3e42;">
                <div style="color: #888; font-size: 0.9em;">얻은 골드</div>
                <div style="color: #FFD700; font-size: 1.3em; margin-top: 5px;">${stats.totalGoldEarned}G</div>
            </div>
            <div style="background: #2d2d30; padding: 15px; border-radius: 5px; border: 1px solid #3e3e42;">
                <div style="color: #888; font-size: 0.9em;">현재 LUCK</div>
                <div style="color: #FFD700; font-size: 1.3em; margin-top: 5px;">${stats.luck} (${(stats.luck / 100).toFixed(2)}배)</div>
            </div>
            <div style="background: #2d2d30; padding: 15px; border-radius: 5px; border: 1px solid #3e3e42;">
                <div style="color: #888; font-size: 0.9em;">현재 SPD</div>
                <div style="color: #FFD700; font-size: 1.3em; margin-top: 5px;">${stats.speed} (${(stats.speed / 100).toFixed(2)}배)</div>
            </div>
        </div>
    `;
}

setInterval(() => {
    stats.playTime++;
    if (!document.getElementById('stats-panel').classList.contains('hidden')) {
        updateStatsDisplay();
    }
}, 1000);
