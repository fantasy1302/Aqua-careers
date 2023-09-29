(function() {
    const careersTabs = document.querySelectorAll('.careers-tabs-tab');
    const careersContentItems = document.querySelectorAll('.careers-tabs-content-item');
  
    careersTabs.forEach((tab, i) => {
      tab.addEventListener('click', () => {
        careersTabs.forEach(item => {
          item.classList.remove('careers-tabs-tab-active');
        });
        tab.classList.add('careers-tabs-tab-active');
  
        careersContentItems.forEach((container, k) => {
          if (i === k) {
            setTimeout(() => {
              container.style.display = 'block';
              container.style.opacity = '1';
            }, 200);
          } else {
            container.style.display = 'none';
            container.style.opacity = '0';
          }
        });
      });
    });
  })();
  