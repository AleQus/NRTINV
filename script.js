const form = document.querySelector('#product-form');
const tbody = document.querySelector('tbody');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const category = document.querySelector('#category').value;
  const productName = document.querySelector('#productName').value;
  const lotNo = document.querySelector('#lotNo').value;
  const importDate = document.querySelector('#importDate').value;
  const quantity = document.querySelector('#quantity').value;
  const storageLocation = document.querySelector('#storageLocation').value;

  const row = document.createElement('tr');
  row.innerHTML = `
    <td>${category}</td>
    <td>${productName}</td>
    <td>${lotNo}</td>
    <td>${importDate}</td>
    <td>${quantity}</td>
    <td>${storageLocation}</td>
    <td><button class="btn-generate">QR Code 생성</button></td>
    <td>
      <button class="btn-edit">수정</button>
      <button class="btn-delete">삭제</button>
      <button class="btn-save" style="display: none">저장</button>
      <button class="btn-cancel" style="display: none">취소</button>
    </td>
  `;
  tbody.appendChild(row);

  form.reset();
});

tbody.addEventListener('click', (event) => {
  const target = event.target;
  const row = target.closest('tr');

  if (target.classList.contains('btn-generate')) {
    // QR 코드 생성 버튼 클릭 시 QR 코드를 생성하는 기능을 추가할 수 있습니다.
    console.log('QR 코드 생성');
  } else if (target.classList.contains('btn-edit')) {
    editRow(row);
  } else if (target.classList.contains('btn-delete')) {
    deleteRow(row);
  } else if (target.classList.contains('btn-save')) {
    saveRow(row);
  } else if (target.classList.contains('btn-cancel')) {
    cancelEditRow(row);
  }
});

function editRow(row) {
  const cells = row.querySelectorAll('td');
  const category = cells[0].textContent;
  const productName = cells[1].textContent;
  const lotNo = cells[2].textContent;
  const importDate = cells[3].textContent;
  const quantity = cells[4].textContent;
  const storageLocation = cells[5].textContent;

  cells[0].innerHTML = `<input type="text" value="${category}">`;
  cells[1].innerHTML = `<input type="text" value="${productName}">`;
  cells[2].innerHTML = `<input type="text" value="${lotNo}">`;
  cells[3].innerHTML = `<input type="text" value="${importDate}">`;
  cells[4].innerHTML = `<input type="text" value="${quantity}">`;
  cells[5].innerHTML = `<input type="text" value="${storageLocation}">`;

  row.querySelector('.btn-edit').style.display = 'none';
  row.querySelector('.btn-delete').style.display = 'none';
  row.querySelector('.btn-save').style.display = 'inline-block';
  row.querySelector('.btn-cancel').style.display = 'inline-block';
}

function saveRow(row) {
    const inputs = row.querySelectorAll('input');
    const category = inputs[0].value;
    const productName = inputs[1].value;
    const lotNo = inputs[2].value;
    const importDate = inputs[3].value;
    const quantity = inputs[4].value;
    const storageLocation = inputs[5].value;
  
    const cells = row.querySelectorAll('td');
    cells[0].textContent = category;
    cells[1].textContent = productName;
    cells[2].textContent = lotNo;
    cells[3].textContent = importDate;
    cells[4].textContent = quantity;
    cells[5].textContent = storageLocation;
  
    row.querySelector('.btn-save').style.display = 'none';
    row.querySelector('.btn-cancel').style.display = 'none';
    row.querySelector('.btn-edit').style.display = 'inline-block';
    row.querySelector('.btn-delete').style.display = 'inline-block';
  }
  
  function cancelEdit(row) {
    const inputs = row.querySelectorAll('input');
    const cells = row.querySelectorAll('td');
    for (let i = 0; i < inputs.length; i++) {
      inputs[i].value = cells[i].textContent;
    }
  
    row.querySelector('.btn-save').style.display = 'none';
    row.querySelector('.btn-cancel').style.display = 'none';
    row.querySelector('.btn-edit').style.display = 'inline-block';
    row.querySelector('.btn-delete').style.display = 'inline-block';
  }
  function deleteRow(row) {
    row.remove();
  }
  tbody.addEventListener('click', (event) => {
    const target = event.target;
    const row = target.closest('tr');
  
    if (target.classList.contains('btn-generate')) {
      const productName = row.querySelector('td:nth-child(2)').textContent;
      const lotNo = row.querySelector('td:nth-child(3)').textContent;
  
      // QR 코드 생성 라이브러리를 이용하여 QR 코드를 생성합니다.
      const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?data=ProductName:${productName}%0ALotNo:${lotNo}&size=100x100`;
  
      // QR 코드를 이미지 태그로 생성합니다.
      const qrCodeImage = `<img src="${qrCodeUrl}" alt="QR Code">`;
  
      // QR 코드를 담을 새로운 열을 생성하고, QR 코드를 추가합니다.
      const qrCodeRow = document.createElement('tr');
      qrCodeRow.innerHTML = `
        <td colspan="6">${qrCodeImage}</td>
        <td>
          <button class="btn-delete">삭제</button>
        </td>
      `;
      tbody.insertBefore(qrCodeRow, row.nextSibling);
  
      // 현재 열의 QR 코드 생성 버튼을 비활성화합니다.
      target.disabled = true;
    } else if (target.classList.contains('btn-edit')) {
      editRow(row);
    } else if (target.classList.contains('btn-delete')) {
      deleteRow(row);
    } else if (target.classList.contains('btn-save')) {
      saveRow(row);
    } else if (target.classList.contains('btn-cancel')) {
      cancelEdit(row);
    }
  });
  