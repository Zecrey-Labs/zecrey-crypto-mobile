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
> ElgamalDec('B6mepb7SLpu6lbanLdaZz/qRlnqtW5DWjNY5g2ABwQ9HTWTCL5TRvcexHMy3jeS+e0X4FWhhgwGa0EZyJW7dFg==','2412895039494856025337225500873984828613068655721196706330793588044245440294',0,20000)

> ElgamalRawDec('B6mepb7SLpu6lbanLdaZz/qRlnqtW5DWjNY5g2ABwQ9HTWTCL5TRvcexHMy3jeS+e0X4FWhhgwGa0EZyJW7dFg==','2412895039494856025337225500873984828613068655721196706330793588044245440294')



// withdraw fee id is the different from asset id, cost 2050.8ms
> ProveWithdraw('{"account_index": 1, "c":"MUnFvRWaBdJxsVn48aksnmonpSQRIY+4Q/9/5LMvZZqWUPxdKy4iKj/RWmP+CULYO1dDKt1lA9dEZp03TNzVoA==", "pk":"Od3487/nVmmZ/+Ou5zglQRPn1EzJjyGvWseg/WRQfhQ=","b":8, "b_star":2,"sk":"1438221884033878467789858739854179921911672100180080251198301404658704885569","asset_id":1,"chain_id":1,"receive_addr":"0xE9b15a2D396B349ABF60e53ec66Bcf9af262D449","c_fee":"MUnFvRWaBdJxsVn48aksnmonpSQRIY+4Q/9/5LMvZZrn/2E7OTsZxipdobDDEWpRRpI6ZnJpUXcE2etUPDVckA==", "b_fee":10, "gas_fee_asset_id": 2, "gas_fee": 1}')

// withdraw fee id is the same with asset id, cost 1030.3ms
> ProveWithdraw('{"account_index": 1, "c":"1x8wtb11G3Ic5xlWcXg+QPCuN21t8Wck5EMB90JiNIO+Ug9QTdeWpIiKyvUpc+Pa26jnhKaK0u8RHpTMKWgZhw==", "pk":"EA9TG27GPrIsJFrl0RjMOrUo4N6UNYFhgujpkpPAt44=","b":8, "b_star":2,"sk":"803627389714547802166494311754097674233988430931225503358126950464409918717","asset_id":1,"chain_id":1,"receive_addr":"0xE9b15a2D396B349ABF60e53ec66Bcf9af262D449","c_fee":"1x8wtb11G3Ic5xlWcXg+QPCuN21t8Wck5EMB90JiNIO+Ug9QTdeWpIiKyvUpc+Pa26jnhKaK0u8RHpTMKWgZhw==", "b_fee":8, "gas_fee_asset_id": 1, "gas_fee": 1}')


> ProveTransfer(1,1,'memo','[{"account_index":3,"balance_enc":"B6mepb7SLpu6lbanLdaZz/qRlnqtW5DWjNY5g2ABwQ9HTWTCL5TRvcexHMy3jeS+e0X4FWhhgwGa0EZyJW7dFg==", "balance":8,"pk":"WemZmInuROMWJ7s7CCd8TfagFt0prUx2rsQJ5JSHxpQ=", "b_delta":-3,"sk":"2412895039494856025337225500873984828613068655721196706330793588044245440294"},{"account_index":5,"balance_enc":"f4iCw/fkN/XteL0F5BxYdzEhC3LtCCBunQTQPsji4oRoSmQsTjbcRiNpHstZOuoPL4Mi9S13IxgCS5HczvQ7Ig==", "pk":"E/uUTftGKgNxX5tN69VZ0cQ/v3SlAEvayZtfzXkmFhU=", "b_delta":2},{"account_index":7,"balance_enc":"+X6TfYgXylWApwfRu5r/yljiat2KiiZfJ4nlklEgLhhF+HABklShFk38O27PrBUBc8sqwQWJ6fx/X0hu39wOsA==", "pk":"YE3+IpzjoJMraV5qwqvWLx72w8VqaYCjzcv3BCVx6yg=", "b_delta":0}]')

// unlock, cost 1060ms
> ProveUnlock('{"chain_id": 1, "account_index": 3, "asset_id": 1, "balance": 10, "delta_amount": 2, "sk": "985253509020469179886479720098323033600454726558550567900153542576169224206","c_fee": "6hvbxZnLdH+EWKuniu3zhR7S/XMvo85GlMk1d7YfK6ivnJadi8+tntBl3E8t14Me1PHb6Lawtk+9nyrxa+XRoQ==","b_fee":100,"gas_fee_asset_id":1,"gas_fee":1}')

// swap fee id is different from asset A id, cost 2051ms
> ProveSwap('{"pair_index": 1, "account_index": 3, "c_u_a":"SzmequMLDzrCHitd1Hw2OfFUR9z5aoU/kGR5oJSHHafZrpEwOqbFtORhrfUkJFnpvA3rCWBpbrxgkY8MNCLKmQ==","pk_u":"G0KF3I8ZZWGX/qgdfFr8vodCaIHJ7Z//HrrWOy4jgxI=","pk_treasury":"ihHiw/wo0bYWrjDCm/e9LInpioTRUo0qSin5La0+1wY=","asset_a_id":1,"asset_b_id":2,"b_a_delta":1000,"b_u_a":2000,"min_b_b_delta":960,"fee_rate":30,"treasury_rate":10,"sk_u":"1020823131272693259381832026202869246252296047354804352294128070898636555720","c_fee":"RoudhBBVGj8HXjekzbwz6HixXgQL9UcCv7FayWHINyyyEM5PvH5E/8NW2qFwOwyL6s9Fpz0T0ZCfFlqcGuMAlA==","b_fee":1000,"gas_fee_asset_id":2,"gas_fee":30}')

// swap fee id is the same with asset A id, cost 1069ms
> ProveSwap('{"pair_index": 1, "account_index": 3, "c_u_a":"7puBWwapdu+GqxGyy4kEqOKGiULsqTiq23qqTPBgTAkoLwkIiEZ/Kdp0TRXhKXA6uCEcsJNMOpj6FCL5Q2ZyAA==","pk_u":"puA4PcXt+YY8cquX2YIZJ4BQpuu/Rf7hSBZIyBSgK58=","pk_treasury":"f/ntbSwVmqseGk4PG1ZUtSZeNzFnBGhJOgYAui7dbgc=","asset_a_id":1,"asset_b_id":2,"b_a_delta":1000,"b_u_a":2000,"min_b_b_delta":960,"fee_rate":30,"treasury_rate":10,"sk_u":"1981415624984032196223106065637130805092233720971997297784981306710264131399","c_fee":"8PU6Ku5SYsF0Pfw2EjL1rPHryO+zZDp5HZXbv8i9YSPZh6IB4+dwl5YzxyVSwV4FllsBjQ5mxSs6C26uIlnSFw==","b_fee":2000,"gas_fee_asset_id":1,"gas_fee":30}')

// remove liquidity, cost 2140ms
> ProveRemoveLiquidity('{"pair_index":1,"account_index":3,"c_u_lp": "OlvjmVM9T0Ub6HZIiW24gVuQuWPcohXtAeZ8Z7w8bhF4OP9FtIYZwSJLgePdzS6rJKISMlHZ3r5oP4SUNDTQoA==", "pk_u": "BWdP3HjnM6JajROHnsQVY+T+OqGI8F45bopPZXow65I=", "b_lp": 100, "delta_lp": 10, "min_b_a_delta": 1, "min_b_b_delta": 1, "asset_a_id": 1, "asset_b_id":2, "sk_u":"10038928496977858332086779290504188602365215894270688735065347453481002991", "c_fee":"uD3Dg5Sb8IuTHDbyjb4fQUUlFAdElFpx13zuge5hYYvYLn3iwqle8R6IHTp7PKLlcLg9tu+qXU6jhaDkAXAnEA==", "b_fee": 100, "gas_fee_asset_id": 1, "gas_fee": 1}')

// add liquidity fee id is different from asset A & B id, cost 3167ms
> ProveAddLiquidity('{"pair_index": 1, "account_index": 3, "c_u_a": "EJTRbrC1xUdFb1BEtGL43Z6FYq3vs+xb6dUPtMCPPy+TSBPZqWFysOrvdTChPztqotvNMRwAHxMKKjtMJeokmw==", "c_u_b": "xpj+0xoiT0uSpOJUTP9Bf/HdVIMxAVXDGgO5jeA0pxqpsG51ajfY/m36q9aH4xKz5GWGY7Hq8OPSoNJQbZOqkg==", "pk_pool": "9PGD33Y1p+cescTaTdcLTXzqaKrg/PgMfa074e0AUyc=", "pk_u":"VRKMAo05ZddH7YnolzFjVxd7CS3dWlLeNssAYc3HDYY=", "asset_a_id":1, "asset_b_id": 2, "b_u_a": 8, "b_u_b":4,"b_a_delta": 1, "b_b_delta": 1,"sk_u":"72251987661699258620091828476069925445607709842076222212462549135814450325", "c_fee": "QLklxZ+Tp5C08vzEqLnR1yhhJK2fYsykizm/Vx5nxyDILH4vQa1xxKE/HypkXAr2/KPT/IfOOWk6pSMHF0oNHQ==", "b_fee":100, "gas_fee_asset_id": 3, "gas_fee": 10}')

// add liquidity fee id is the same with asset A id, cost 2304ms
> ProveAddLiquidity('{"pair_index": 1, "account_index": 3, "c_u_a": "EJTRbrC1xUdFb1BEtGL43Z6FYq3vs+xb6dUPtMCPPy+TSBPZqWFysOrvdTChPztqotvNMRwAHxMKKjtMJeokmw==", "c_u_b": "xpj+0xoiT0uSpOJUTP9Bf/HdVIMxAVXDGgO5jeA0pxqpsG51ajfY/m36q9aH4xKz5GWGY7Hq8OPSoNJQbZOqkg==", "pk_pool": "9PGD33Y1p+cescTaTdcLTXzqaKrg/PgMfa074e0AUyc=", "pk_u":"VRKMAo05ZddH7YnolzFjVxd7CS3dWlLeNssAYc3HDYY=", "asset_a_id":1, "asset_b_id": 2, "b_u_a": 8, "b_u_b":4,"b_a_delta": 1, "b_b_delta": 1,"sk_u":"72251987661699258620091828476069925445607709842076222212462549135814450325", "c_fee": "EJTRbrC1xUdFb1BEtGL43Z6FYq3vs+xb6dUPtMCPPy+TSBPZqWFysOrvdTChPztqotvNMRwAHxMKKjtMJeokmw==", "b_fee":8, "gas_fee_asset_id": 1, "gas_fee": 1}')

// add liquidity fee id is the same with asset B id, cost 2314ms
> ProveAddLiquidity('{"pair_index": 1, "account_index": 3, "c_u_a": "EJTRbrC1xUdFb1BEtGL43Z6FYq3vs+xb6dUPtMCPPy+TSBPZqWFysOrvdTChPztqotvNMRwAHxMKKjtMJeokmw==", "c_u_b": "xpj+0xoiT0uSpOJUTP9Bf/HdVIMxAVXDGgO5jeA0pxqpsG51ajfY/m36q9aH4xKz5GWGY7Hq8OPSoNJQbZOqkg==", "pk_pool": "9PGD33Y1p+cescTaTdcLTXzqaKrg/PgMfa074e0AUyc=", "pk_u":"VRKMAo05ZddH7YnolzFjVxd7CS3dWlLeNssAYc3HDYY=", "asset_a_id":1, "asset_b_id": 2, "b_u_a": 8, "b_u_b":4,"b_a_delta": 1, "b_b_delta": 1,"sk_u":"72251987661699258620091828476069925445607709842076222212462549135814450325", "c_fee": "xpj+0xoiT0uSpOJUTP9Bf/HdVIMxAVXDGgO5jeA0pxqpsG51ajfY/m36q9aH4xKz5GWGY7Hq8OPSoNJQbZOqkg==", "b_fee":4, "gas_fee_asset_id": 2, "gas_fee": 1}')
```

## How to use In React-Native 
```
import ZecreyLibModules from '../../zecrey-crypto-mobile';


  ZecreyLibModules.elgamalRawDec('de', 'de', resp => {
    if (resp.bflag === 1) {
      console.warn('success', resp.ret);
    } else {
      console.warn('failure', resp.err);
    }
  });
  
  or other method param
```
