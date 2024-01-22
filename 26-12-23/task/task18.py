buy_price=int(input("enter a amount"))
sell_price=int(input("enter a amount"))


profit=sell_price-buy_price
loss=buy_price-sell_price

if buy_price<sell_price:
    print("profit amount",profit)
else:
    print("loss amount",loss)