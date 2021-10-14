import './ExpenseItem.css';

function ExpenseItem() {
    return (
        <div className="expense-item">
            <div>March 28th 2021</div>
            <div className="expense-item__description">
                <h2>Care Insurance</h2>
                <div className="expense-item__price">$234.56</div>
            </div>
        </div>
    );
}
//Must return on root element

export default ExpenseItem;
