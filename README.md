# ๐ธ SpiderMap ๐ท
ํ๋ฆ๋๋ฅผ ๊ทธ๋ ค๋ณผ ์ ์๋ ๋ง์ธ๋๋งต์ ์ดํ๋ฆฌ์ผ์ด์์๋๋ค. 

## ๐ ์ด๋ ๊ฒ ์ฐ๋ฉด ์ข์์. 
> ๋ณต์กํ ๊ตฌ์กฐ๋ ํ๋ฆ์ ์ฝ๊ฒ ๊ทธ๋ ค๋ณด๊ณ , ๋ธ๋ ์ธ์คํ ๋ฐ์ด ํ์ํ  ๋ ์์ด๋์ด ๋ณด๋๋ก ํ์ฉํด ๋ณด์ธ์!

## ๐ URL
<!-- [๋งํฌ]() -->

## ๐ฏ ์ฃผ์ ๊ธฐ๋ฅ 
### ๋ง์ธ๋ ๋งต
- ํธ๋ฆฌ ๊ทธ๋ํ ํ์์ ๋ง์ธ๋ ๋งต์ ๊ทธ๋ฆด ์ ์์ต๋๋ค. 
- ๋ธ๋์ ํธ๋ค์ Drag & Drop ํ๋ฉด ์๋ก์ด ๋ธ๋๊ฐ ์์ฑ๋ฉ๋๋ค. 
- ๋ธ๋๋ฅผ ํด๋ฆญํ๋ฉด ์์ ํ  ์ ์์ต๋๋ค. (๋ธ๋ ์ด๋ฆ, ๋ฐฐ๊ฒฝ ์ปฌ๋ฌ, ์ฃ์ง ์คํ์ผ)
- ์์ฑํ ํ๋ก์ฐ๋ฅผ ๋ค์ด๋ก๋ ๋ฐ์ ์ ์์ต๋๋ค. (advanced)

## ๐น ๊ธฐ์  ์คํ
`React` `Redux Toolkit`
`React Flow library` 

## ๐ฉโ๐ป ๊ฐ๋ฐ ์ผ์ง 
- 2022/9/16
  - ๊ฐ์ธ ํฌํธํด๋ฆฌ์ค ์ง์  ๋ง๋ค๊ธฐ ๊ณผ์ ๋ฅผ ์งํํ๋ฉฐ ๋ง์ธ๋๋งต ์ดํ๋ฆฌ์ผ์ด์์ ๊ตฌ์ํ์ต๋๋ค. 
  - [๊ธฐํ ์ด๊ธฐ Figma](https://www.figma.com/file/wQest078DU9Wm88PEvrvSQ/app-flows?node-id=0%3A1)

- 2022/9/18
  - ๊ธฐ์กด MindMap์์ SpiderMap๋ก ๊ธฐํ์ ๋ณ๊ฒฝ ํ์ต๋๋ค. 
  - ํ๋ฉด์ ๋์์ธํ๊ณ , [React flow](https://reactflow.dev/) ๋ผ์ด๋ธ๋ฌ๋ฆฌ๋ฅผ ์ถ๊ฐํ์ต๋๋ค. 

- 2022/9/19
  - Redux toolkit์ ํ๋ก์ ํธ์ ์ ์ฉํ์ต๋๋ค. 
  - Spidermap ์ด๋ฆ์ ๋ถ์ด๊ณ  ๋์์ธ์ ์์ ํ์ต๋๋ค.๐ค

## ์ด์

### 1) ํ๋ํ Redux ๋ณต์ต ๊ณผ์  

๐ธ SpiderMap์์ ๊ด๋ฆฌ๋๋ ์ํ๋ ํฌ๊ฒ ๋ธ๋๋ค๊ณผ ์ฃ์ง(๋ธ๋ ์ฐ๊ฒฐ์ )์ด ์๋ค. ๋ธ๋๋ฅผ ์ถ๊ฐํ๋ ๊ฒ์ Flow ๋ผ์ด๋ธ๋ฌ๋ฆฌ์์ ์ ๊ณตํ๋
AddNodeOnEdgeDrop ์ปดํฌ๋ํธ ์์๋ก ์ฝ๊ฒ ์ถ๊ฐํ  ์ ์์๋ค. ๋ฌธ์ ๋, ์์ ๊ณผ ์ญ์ ๊ฐ ์ด๋ฃจ์ด์ง๋ ๋ชจ๋ฌ ์ปดํฌ๋ํธ๋ก ๋ธ๋(์ด๋ฆ, ๋ฐฐ๊ฒฝ์)์ ์ฃ์ง(๋ผ์ธ ์คํ์ผ), setState๋ฅผ ์ ๋ฌํ๋ ๊ณผ์ ์์ ๊ณผํ props ์ ๋ฌ๊ณผ ์ํ ๋์ด์ฌ๋ฆฌ๊ธฐ์ ์๊ตฌ์ฌ์ด ๋ค์๋ค. 

> ๊ฒฐ๋ก ์ ์ผ๋ก, ํ๋ก์ ํธ์์ ๊ด๋ฆฌํ๋ state๋ ๋ธ๋์ ์ฃ์ง, ๋ชจ๋ ๋ผ์ด๋ธ๋ฌ๋ฆฌ์์ ์ ๊ณตํ๋ state๋ก ๊ด๋ฆฌ๋๊ธฐ ๋๋ฌธ์, 
> store๋ฅผ ์ฌ์ฉํ๊ธฐ ์ํด Flow ๋ผ์ด๋ธ๋ฌ๋ฆฌ์์ ์ ๊ณตํ๋ API๋ฅผ ์ฌ์ฉํด ์ ์ฉ์ด ํ์ํจ์ ์์๋ค. 

์ฒ์์ ๋ชจ๋  ์ค์ ์ด ๋ด๊ธด ๋ธ๋์ ์ฃ์ง๋ฅผ ์ ์ญ์์ React-Redux๋ก ๊ด๋ฆฌํ๊ณ ์ ํ๋ค. 
ํ๋ก์ ํธ์ ์ ์ฉํ๋ ๊ฒ์ ์ฒ์์ด๋ผ ๋ณต์ตํ๋ ๊ณผ์ ์์ ์์นญ์ ํ๋ค๊ฐ ์ข ๋ ๊ฐํธํ๋ฉด์ ๋ถํ์ํ ์ฝ๋๋ฅผ 
์ค์ผ ์ ์๋ React Toolkit์ ์ถ๊ฐ์ ์ผ๋ก ํ์ตํ๋ค. 
