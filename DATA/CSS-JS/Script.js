// Lấy tất cả các div có lớp wp-block-video
var videoDivs = document.querySelectorAll('.VideoShort');
// Lặp qua từng div và tìm thẻ video trong mỗi div
videoDivs.forEach(function (videoDiv) {
    var video = videoDiv.querySelector('video');
    if (video) {
        video.setAttribute('webkit-playsinline', '');
        video.setAttribute('playsinline', '');
        video.removeAttribute('controls', ''); // Thêm thuộc tính controls nếu chưa có
    }
});


const videos = document.querySelectorAll('.VideoShort video');

videos.forEach(video => {
    video.addEventListener('click', function () {
        // Dừng tất cả các video khác
        videos.forEach(otherVideo => {
            if (otherVideo !== video) {
                otherVideo.pause();
            }
        });
        if (video.paused) {
            video.play();
        } else {
            video.pause();
        }
    });
});

document.getElementById('toggleButton').addEventListener('click', function() {
    var menu = document.querySelector('.Menu');
    var toggleButton = document.getElementById('toggleButton');
  
    // Kiểm tra xem menu có đang mở hay không
    var isOpen = menu.classList.contains('Menu-open');
  
    // Nếu đang mở, thì đóng. Ngược lại, mở.
    if (isOpen) {
      toggleButton.innerText = 'Xem Bảng Giá'
      menu.classList.add('Menu-closed');
      setTimeout(() => {
        menu.classList.remove('Menu-open');
      }, 500);
    } else {
        toggleButton.innerText = 'Đóng Bảng Giá'
      menu.classList.remove('Menu-closed');
      menu.classList.add('Menu-open');
    }
  
    // Sự kiện animationend để xác định khi hiệu ứng kết thúc
    menu.addEventListener('animationend', function() {
      if (!menu.classList.contains('Menu-open')) {
        menu.style.display = 'none';
      }
    }, { once: true }); // Dùng { once: true } để đảm bảo rằng sự kiện chỉ được lắng nghe một lần
  });
  