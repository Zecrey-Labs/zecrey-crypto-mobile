# zecrey-crypto-mobile

## SDK

### ElgamalEnc

**Input:**

| Name | Type   | Comment                                       |
| ---- | ------ | --------------------------------------------- |
| sk   | string | private key, 251bits, type is BigInt, base 10 |
| b    | int    | amount                                        |

### ElgamalDec

**Input:**

| Name  | Type   | Comment                                       |
| ----- | ------ | --------------------------------------------- |
| CStr  | string | encryption value, 64B                         |
| sk    | string | private key, 251bits, type is BigInt, base 10 |
| start | int    | dec start value, default use 0                |
| end   | int    | dec end value ,default use $2^{32}$           |

### ElgamalRawDec

**Input:**

| Name | Type   | Comment                                       |
| ---- | ------ | --------------------------------------------- |
| CStr | string | encryption value, 64B                         |
| sk   | string | private key, 251bits, type is BigInt, base 10 |

### GetL2PublicKey

**Input:**

| Name | Type   | Comment                                                    |
| ---- | ------ | ---------------------------------------------------------- |
| sk   | string | private key, length range 251~256, type is BigInt, base 10 |

### ProveWithdraw

**Input:**

> only one input: JSON format **string**

```go
type WithdrawSegmentFormat struct {
	// account index
	AccountIndex int    `json:"account_index"`
	// encryption of the balance
	C            string `json:"c"`
	// public key
	Pk           string `json:"pk"`
	// balance
	B            int64  `json:"b"`
	// withdraw amount
	BStar        int64  `json:"b_star"`
	// private key
	Sk           string `json:"sk"`
	// asset id
	AssetId      int    `json:"asset_id"`
	// chain id
	ChainId      int    `json:"chain_id"`
	// receive address
	ReceiveAddr  string `json:"receive_addr"`
	// fee part
	// encryption of balance of the gas fee asset
	C_fee         string `json:"c_fee"`
	// balance of gas fee asset
	B_fee         int64  `json:"b_fee"`
	// gas fee asset id
	GasFeeAssetId int    `json:"gas_fee_asset_id"`
	// gas fee
	GasFee        int64  `json:"gas_fee"`
}
```

### ProveUnlock

**Input:**

> only one input: JSON format **string**

```go
type UnlockSegmentFormat struct {
	// chain id
	ChainId      int    `json:"chain_id"`
	// account index
	AccountIndex int    `json:"account_index"`
	// asset id
	AssetId      int    `json:"asset_id"`
	// balance
	Balance      int64  `json:"balance"`
	// unlock amount
	DeltaAmount  int64  `json:"delta_amount"`
	// private key
	Sk           string `json:"sk"`
	// fee part
	// encryption of the balance of the gas fee
	C_fee         string `json:"c_fee"`
	// gas fee balance
	B_fee         int64  `json:"b_fee"`
	// gas fee asset id
	GasFeeAssetId int    `json:"gas_fee_asset_id"`
	// gas fee
	GasFee        int64  `json:"gas_fee"`
}
```

### ProveTransfer

**Input:**

| Name        | Type                            | Comment             |
| ----------- | ------------------------------- | ------------------- |
| assetId     | int                             | unique asset id     |
| gasFee      | int                             | transaction gas fee |
| memo        | string                          | memo                |
| segmentInfo | string of TransferSegmentFormat | transfer info       |

> JSON format string

```go
// TransferSegmentFormat Format is used to accept JSON string
type TransferSegmentFormat struct {
	// account index
	AccountIndex int `json:"account_index"`
	// ElGamalEnc
	BalanceEnc string `json:"balance_enc"`
	// Balance
	Balance int64 `json:"Balance"`
	// public key
	Pk string `json:"pk"`
	// bDelta
	BDelta int64 `json:"b_delta"`
	// secret key
	Sk string `json:"Sk"`
}
```

### ProveSwap

**Input:**

> only one input: JSON format **string**

```go
/*
	SwapSegmentFormat: format version of SwapSegment
*/
type SwapSegmentFormat struct {
	// pair index
	PairIndex    int    `json:"pair_index"`
	// account index
	AccountIndex int    `json:"account_index"`
	// encryption of the balance of asset A
	C_uA         string `json:"c_u_a"`
	// user public key
	Pk_u         string `json:"pk_u"`
	// system treasury account public key
	Pk_treasury  string `json:"pk_treasury"`
	// asset a id
	AssetAId     int    `json:"asset_a_id"`
	// asset b id
	AssetBId     int    `json:"asset_b_id"`
	// swap amount for asset a
	B_A_Delta    int64  `json:"b_a_delta"`
	// balance for asset a
	B_u_A        int64  `json:"b_u_a"`
	// equal to B * (1 - slippage), B gets from the layer-2
	MinB_B_Delta int64  `json:"min_b_b_delta"`
	// fee rate, gets from layer-2
	FeeRate      int    `json:"fee_rate"`
	// treasury rate gets from layer-2
	TreasuryRate int    `json:"treasury_rate"`
	// private key
	Sk_u         string `json:"sk_u"`
	// fee part
	C_fee         string `json:"c_fee"`
	B_fee         int64  `json:"b_fee"`
	GasFeeAssetId int    `json:"gas_fee_asset_id"`
	GasFee        int64  `json:"gas_fee"`
}
```

### ProveAddLiquidity

**Input:**

> only one input: JSON format **string**

```go
type AddLiquiditySegmentFormat struct {
	PairIndex    int    `json:"pair_index"`
	AccountIndex int    `json:"account_index"`
	C_uA         string `json:"c_u_a"`
	C_uB         string `json:"c_u_b"`
	Pk_pool      string `json:"pk_pool"`
	Pk_u         string `json:"pk_u"`
	AssetAId     int    `json:"asset_a_id"`
	AssetBId     int    `json:"asset_b_id"`
	B_uA         int64  `json:"b_u_a"`
	B_uB         int64  `json:"b_u_b"`
	B_A_Delta    int64  `json:"b_a_delta"`
	B_B_Delta    int64  `json:"b_b_delta"`
	Sk_u         string `json:"sk_u"`
	// fee part
	C_fee         string `json:"c_fee"`
	B_fee         int64  `json:"b_fee"`
	GasFeeAssetId int    `json:"gas_fee_asset_id"`
	GasFee        int64  `json:"gas_fee"`
}
```

### ProveRemoveLiquidity

**Input:**

>  only one input: JSON format **string**

```go
type RemoveLiquiditySegmentFormat struct {
	PairIndex    int    `json:"pair_index"`
	AccountIndex int    `json:"account_index"`
	C_u_LP       string `json:"c_u_lp"`
	Pk_u         string `json:"pk_u"`
	B_LP         int64  `json:"b_lp"`
	Delta_LP     int64  `json:"delta_lp"`
	MinB_A_Delta int64  `json:"min_b_a_delta"`
	MinB_B_Delta int64  `json:"min_b_b_delta"`
	AssetAId     int    `json:"asset_a_id"`
	AssetBId     int    `json:"asset_b_id"`
	Sk_u         string `json:"sk_u"`
	// fee part
	C_fee         string `json:"c_fee"`
	B_fee         int64  `json:"b_fee"`
	GasFeeAssetId int    `json:"gas_fee_asset_id"`
	GasFee        int64  `json:"gas_fee"`
}
```

## Examples

```json
> ElgamalDec('PSjJUWon0WV1gQA/SxovPRS0XCyVdGpq0O+Ttjh+ZBe38+GdDtFhVNMrDZQKtfaZ5e1oPkgO2LRoxTMGp1pPoQ==','959120971630916186538306178761323785168020249928470126158942387495545940088',0,20000)

> ElgamalRawDec('PSjJUWon0WV1gQA/SxovPRS0XCyVdGpq0O+Ttjh+ZBe38+GdDtFhVNMrDZQKtfaZ5e1oPkgO2LRoxTMGp1pPoQ==','959120971630916186538306178761323785168020249928470126158942387495545940088')
# it will output "mbZvQoX6SeRGKk/KtzmseBv/mUDHGFHKeEzk0e6eMyg="


// withdraw fee id is the different from asset id, cost 2050.8ms
> ProveWithdraw('{"account_index": 1, "c":"m3jEfxmLrL9xXmr8hRjw2ddRuS9LD+ylbdr3w0JMuRZMdG3aiLo+hfDOezMSeXXiw+Jk2U/967RLC99qhgBTqA==", "pk":"fhtYaJmDcV93EuGRJUkiPQkgk+dr4mLKFdayOsiPKZo=","b":8, "b_star":2,"sk":"1534761834718427049701159954173450085001264109697049531015992277578747248868","asset_id":1,"chain_id":1,"receive_addr":"0xE9b15a2D396B349ABF60e53ec66Bcf9af262D449","c_fee":"m3jEfxmLrL9xXmr8hRjw2ddRuS9LD+ylbdr3w0JMuRbKvX/UaPrH9qMqHt7ddc//CQC7tdM9W7Cu1gPoFVpZKQ==", "b_fee":10, "gas_fee_asset_id": 2, "gas_fee": 1}')

// withdraw fee id is the same with asset id, cost 1030.3ms
> ProveWithdraw('{"account_index": 1, "c":"m3jEfxmLrL9xXmr8hRjw2ddRuS9LD+ylbdr3w0JMuRZMdG3aiLo+hfDOezMSeXXiw+Jk2U/967RLC99qhgBTqA==", "pk":"fhtYaJmDcV93EuGRJUkiPQkgk+dr4mLKFdayOsiPKZo=","b":8, "b_star":2,"sk":"1534761834718427049701159954173450085001264109697049531015992277578747248868","asset_id":1,"chain_id":1,"receive_addr":"0xE9b15a2D396B349ABF60e53ec66Bcf9af262D449","c_fee":"m3jEfxmLrL9xXmr8hRjw2ddRuS9LD+ylbdr3w0JMuRZMdG3aiLo+hfDOezMSeXXiw+Jk2U/967RLC99qhgBTqA==", "b_fee":8, "gas_fee_asset_id": 1, "gas_fee": 1}')


> ProveTransfer(1,1,'memo','[{"account_index":3,"balance_enc":"culWuzSA5GRNhmcW6PLnXFjEc5d6JHpO2T/bG7IVuw8kOkOYYJhhZR+1r22wvxDPM6TkPcG/i1w1q2UrUpcSpQ==", "balance":8,"pk":"uwZoQvXbsFtby4jMF8UBJb0JBXNsbpH4QSZsbZLmmiU=", "b_delta":-5,"sk":"223002292175769838011695137402304499871279309578783082705927886091292349997"},{"account_index":5,"balance_enc":"E+14t4Lw1mPaLz9Acz9go4DZ6LGo02np/rFQ1VUc3yziqGPjUvlUCZ3eH/eO/jYFXXa48POdYLmd2SL/QFybhw==", "pk":"PGEQNN9JrovV1YDv4xZeqVmlCWBHSXVkWKpSXyq2ywo=", "b_delta":1},{"account_index":7,"balance_enc":"k9puKUl1T5cT+mvpIsnlMNouoq1REbqkzXdG2E5yO7DmbGKYGTu0rDhPGY389Fy7tOqkvhYaMo/d4AzgqD/0kg==", "pk":"TNMIpxqvfQ0qSLEeUjvfm7HqtkGZVkI5ENZQZqE1/Qw=", "b_delta":3}]')

// unlock, cost 1060ms
> ProveUnlock('{"chain_id": 1, "account_index": 3, "asset_id": 1, "balance": 10, "delta_amount": 2, "sk": "2041493538597675324666410744453729837490088098575671299940549194878600064888","c_fee": "O5c1cdSBhFUD0EFbvgZxzrXUptspSGrCzz04XaMhRyqOsR0LXpAMAoQEf2JLonpgDq0r9Jh87v7EfTd8OWIGBg==","b_fee":100,"gas_fee_asset_id":1,"gas_fee":1}')

// swap fee id is different from asset A id, cost 2051ms
> ProveSwap('{"pair_index": 1, "account_index": 3, "c_u_a":"SzmequMLDzrCHitd1Hw2OfFUR9z5aoU/kGR5oJSHHafZrpEwOqbFtORhrfUkJFnpvA3rCWBpbrxgkY8MNCLKmQ==","pk_u":"G0KF3I8ZZWGX/qgdfFr8vodCaIHJ7Z//HrrWOy4jgxI=","pk_treasury":"ihHiw/wo0bYWrjDCm/e9LInpioTRUo0qSin5La0+1wY=","asset_a_id":1,"asset_b_id":2,"b_a_delta":1000,"b_u_a":2000,"min_b_b_delta":960,"fee_rate":30,"treasury_rate":10,"sk_u":"1020823131272693259381832026202869246252296047354804352294128070898636555720","c_fee":"RoudhBBVGj8HXjekzbwz6HixXgQL9UcCv7FayWHINyyyEM5PvH5E/8NW2qFwOwyL6s9Fpz0T0ZCfFlqcGuMAlA==","b_fee":1000,"gas_fee_asset_id":2,"gas_fee":30}')

// swap fee id is the same with asset A id, cost 1069ms
> ProveSwap('{"pair_index": 1, "account_index": 3, "c_u_a":"SzmequMLDzrCHitd1Hw2OfFUR9z5aoU/kGR5oJSHHafZrpEwOqbFtORhrfUkJFnpvA3rCWBpbrxgkY8MNCLKmQ==","pk_u":"G0KF3I8ZZWGX/qgdfFr8vodCaIHJ7Z//HrrWOy4jgxI=","pk_treasury":"ihHiw/wo0bYWrjDCm/e9LInpioTRUo0qSin5La0+1wY=","asset_a_id":1,"asset_b_id":2,"b_a_delta":1000,"b_u_a":2000,"min_b_b_delta":960,"fee_rate":30,"treasury_rate":10,"sk_u":"1020823131272693259381832026202869246252296047354804352294128070898636555720","c_fee":"SzmequMLDzrCHitd1Hw2OfFUR9z5aoU/kGR5oJSHHafZrpEwOqbFtORhrfUkJFnpvA3rCWBpbrxgkY8MNCLKmQ==","b_fee":2000,"gas_fee_asset_id":1,"gas_fee":30}')

// remove liquidity, cost 2140ms
> ProveRemoveLiquidity('{"pair_index":1,"account_index":3,"c_u_lp": "Z2usrAI8R6kTMPffQhenwofQNVbkuJOTbrV7VaoRDRmt3oDCs44OxoOeJUqwTRQp+G8TSlHt5s3BISkalrxkIg==", "pk_u": "8bJEpTgnV8lP0IoSCJkPiDlQqgJHtBhgorhVYsoAPZk=", "b_lp": 100, "delta_lp": 10, "min_b_a_delta": 1, "min_b_b_delta": 1, "asset_a_id": 1, "asset_b_id":2, "sk_u":"1772011849687470205402847695523573350402569355483737674338513374359825296680", "c_fee":"uD3Dg5Sb8IuTHDbyjb4fQUUlFAdElFpx13zuge5hYYvYLn3iwqle8R6IHTp7PKLlcLg9tu+qXU6jhaDkAXAnEA==", "b_fee": 100, "gas_fee_asset_id": 1, "gas_fee": 1}')

// add liquidity fee id is different from asset A & B id, cost 3167ms
> ProveAddLiquidity('{"pair_index": 1, "account_index": 3, "c_u_a": "2gB49VKh7a2f6h3JGV0E/RDOQSIAMCzmBYLRezjkRIKuCep4r8/d3QlumgkRif6TCOmiVTrOWdsVwuy/CgKckA==", "c_u_b": "Wb/lsXjdM7z3iMy8BIMbVMWkWnpZYjaE51pNib4aBQUEbGVxm4YOHlVDS2w/AOnPwK2ACXS0aFPibAr98b2fiw==", "pk_pool": "c+wRqnuOTmf0NPaODB4X2509YbcWKwnmS3FAsWAl8RI=", "pk_u":"3+UC4GQtoTeOlbrdCyXsOZ2RTRlrrBJ/YqUJrHaOcAM=", "asset_a_id":1, "asset_b_id": 2, "b_u_a": 8, "b_u_b":4,"b_a_delta": 1, "b_b_delta": 1,"sk_u":"1118266912864228166266853607897072317618597295146579649989703085257983434856", "c_fee": "JSMbRnfH21L6yBYVY2obt1YeiLeCeaN0opI5eiszwCzoS0ecC/wKHJG5lCqSbKkadaHkNEBLNFFKCfSbvGNuIQ==", "b_fee":100, "gas_fee_asset_id": 3, "gas_fee": 10}')

// add liquidity fee id is the same with asset A id, cost 2304ms
> ProveAddLiquidity('{"pair_index": 1, "account_index": 3, "c_u_a": "2gB49VKh7a2f6h3JGV0E/RDOQSIAMCzmBYLRezjkRIKuCep4r8/d3QlumgkRif6TCOmiVTrOWdsVwuy/CgKckA==", "c_u_b": "Wb/lsXjdM7z3iMy8BIMbVMWkWnpZYjaE51pNib4aBQUEbGVxm4YOHlVDS2w/AOnPwK2ACXS0aFPibAr98b2fiw==", "pk_pool": "c+wRqnuOTmf0NPaODB4X2509YbcWKwnmS3FAsWAl8RI=", "pk_u":"3+UC4GQtoTeOlbrdCyXsOZ2RTRlrrBJ/YqUJrHaOcAM=", "asset_a_id":1, "asset_b_id": 2, "b_u_a": 8, "b_u_b":4,"b_a_delta": 1, "b_b_delta": 1,"sk_u":"1118266912864228166266853607897072317618597295146579649989703085257983434856", "c_fee": "2gB49VKh7a2f6h3JGV0E/RDOQSIAMCzmBYLRezjkRIKuCep4r8/d3QlumgkRif6TCOmiVTrOWdsVwuy/CgKckA==", "b_fee":8, "gas_fee_asset_id": 1, "gas_fee": 1}')

// add liquidity fee id is the same with asset B id, cost 2314ms
> ProveAddLiquidity('{"pair_index": 1, "account_index": 3, "c_u_a": "2gB49VKh7a2f6h3JGV0E/RDOQSIAMCzmBYLRezjkRIKuCep4r8/d3QlumgkRif6TCOmiVTrOWdsVwuy/CgKckA==", "c_u_b": "Wb/lsXjdM7z3iMy8BIMbVMWkWnpZYjaE51pNib4aBQUEbGVxm4YOHlVDS2w/AOnPwK2ACXS0aFPibAr98b2fiw==", "pk_pool": "c+wRqnuOTmf0NPaODB4X2509YbcWKwnmS3FAsWAl8RI=", "pk_u":"3+UC4GQtoTeOlbrdCyXsOZ2RTRlrrBJ/YqUJrHaOcAM=", "asset_a_id":1, "asset_b_id": 2, "b_u_a": 8, "b_u_b":4,"b_a_delta": 1, "b_b_delta": 1,"sk_u":"1118266912864228166266853607897072317618597295146579649989703085257983434856", "c_fee": "Wb/lsXjdM7z3iMy8BIMbVMWkWnpZYjaE51pNib4aBQUEbGVxm4YOHlVDS2w/AOnPwK2ACXS0aFPibAr98b2fiw==", "b_fee":4, "gas_fee_asset_id": 2, "gas_fee": 1}')
```

