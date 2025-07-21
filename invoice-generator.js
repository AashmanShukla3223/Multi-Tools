document.addEventListener('DOMContentLoaded', function() {
    const addItemBtn = document.getElementById('add-item-btn');
    const invoiceItems = document.getElementById('invoice-items');
    const totalAmount = document.getElementById('total-amount');
    let itemNumber = 0;

    const calculateTotal = () => {
        let total = 0;
        const items = invoiceItems.querySelectorAll('tr');
        items.forEach(item => {
            const quantity = parseFloat(item.querySelector('.quantity').value);
            const price = parseFloat(item.querySelector('.price').value);
            if (!isNaN(quantity) && !isNaN(price)) {
                const itemTotal = quantity * price;
                item.querySelector('.total').textContent = itemTotal.toFixed(2);
                total += itemTotal;
            }
        });
        totalAmount.textContent = total.toFixed(2);
    };

    addItemBtn.addEventListener('click', () => {
        itemNumber++;
        const itemRow = document.createElement('tr');
        itemRow.innerHTML = `
            <td><input type="text" class="form-control" placeholder="Item name"></td>
            <td><input type="number" class="form-control quantity" value="1"></td>
            <td><input type="number" class="form-control price" value="0.00"></td>
            <td class="total">0.00</td>
        `;
        invoiceItems.appendChild(itemRow);
    });

    invoiceItems.addEventListener('input', calculateTotal);
}); 