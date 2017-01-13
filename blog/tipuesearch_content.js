var tipuesearch = {"pages":[{"title":"About","text":"2016Fall 修課成員網誌","tags":"misc","url":"./pages/about/"},{"title":"2017.01.10第16週","text":"3D printer","tags":"Misc","url":"./20170110di-16zhou.html"},{"title":"2016.12.22第十五週","text":"3D印表機完成 3D印表機零件 支柱 連接桿 底盤 圓盤 本體 40423140-1 from 40423140 on Vimeo .","tags":"Misc","url":"./20161222di-shi-wu-zhou.html"},{"title":"2016.12.15第十四週","text":"2016Fall Solvespace 小方塊完成 本體 按右鍵存檔即可:)) 支架 按右鍵存檔即可:)) 固定塊 按右鍵存檔即可:)) 40423140 from 40423140 on Vimeo .","tags":"Misc","url":"./20161215di-shi-si-zhou.html"},{"title":"2016.12.01第十二週","text":"2016Fall Solvespace 教學2 這禮拜教了如何用 slovespace 繪製小方塊 以下是我畫的零件 支架 按右鍵存檔即可:)) 固定塊 按右鍵存檔即可:))","tags":"Misc","url":"./20161201di-shi-er-zhou.html"},{"title":"2016.11.24第十一週","text":"2016Fall Solvespace 教學 有關 Solvespace 零件, 組件, 機構模擬等功能介紹, 程式編譯與 API 延伸等 Solvespace 1. Parts (零件繪製) 範例檔案: http://solvespace.com/bracket.pl An introductory tutorial is available, in which we draw the same part that is shown in the demo video. This covers most of the basic features of SolveSpace, including sketches, constraints, extrusions, and Boolean operations. When we first run SolveSpace, we will begin with an empty part. Initially, our view of the part will be oriented onto the XY plane; the label for that plane is displayed at the bottom left of the screen (#XY, in dark grey). The axes are also indicated by the three colored arrows at the bottom left; the X, Y, and Z axes are drawn in red, green, and blue respectively. When we hover the mouse over any entity, constraint, or other object in the sketch, that object will appear highlighted in yellow. For example, the XY plane, which is drawn as a dashed square, will appear highlighted when we hover the mouse over it. The YZ and ZX planes initially look like dashed lines, because they are being viewed on edge; but they still appear highlighted in yellow when we hold the mouse over them. It is similarly possible to highlight the X, Y, and Z axes (which are drawn as arrows), or the origin (which like all points is drawn as a green square). Extrude (平行長出或除料) Lathe (旋轉繞行長出或除料) Export Triangle Mesh STL 格式 將零件檔案轉出 STL 格式後 (binary or ASCII format definitions), 進入倉儲後, 利用 Github 內建的 stl viewer 功能 展示. three.js 2. Assembly (零件組立) http://solvespace.com/box.pl 3. Linkages (fourbar & multilink) (四連桿與多連桿運動模擬) 四連桿: 多連桿: http://solvespace.com/linkage.pl 4. Compiled & API (編譯與延伸應用) 使用 Virtualbox 虛擬主機執行 Windows 64 位元與 Ubuntu 64 位元環境中的編譯與延伸應用. Virtualbox Ubuntu 64位元虛擬檔案: http://140.130.17.17/public/Ubuntu/1604_solvespace_final/Ubuntu_160464.vdi (只有在區網可以下載) 在虛擬主機中完成 Solvespace 編譯與執行的參考畫面: 每周作業 2016 11 30 19 39 52 343 from 40423140 on Vimeo . 2016 11 30 19 22 05 118 from 40423140 on Vimeo .","tags":"Misc","url":"./20161124di-shi-yi-zhou.html"},{"title":"2016.11.17第十週","text":"畫四連桿機構 Solvespace 平面四連桿機構模擬 將所得到的點座標的.csv以Excel的畫圖，得到： 首先利用 Brython, 讀取 data 目錄中的 w7_fourbar.csv座標檔案, 然後以 splitlines() 及 split() 取出各點的 x 座標與 y 座標後, 將點連成路徑曲線如下: window.onload=function(){ brython(1); } from browser import document as doc from browser import html import math # 準備繪圖畫布 canvas = doc[\"fourbar\"] container1 = doc['container1'] ctx = canvas.getContext(\"2d\") fourbar_data = open(\"./../w7/w7_fourbar.csv\").read() fourbar_list = fourbar_data.splitlines() #container1 <= fourbar_list[0] # 以下可以利用 ctx 物件進行畫圖 # 先畫一條直線 ctx.beginPath() # 設定線的寬度為 1 個單位 ctx.lineWidth = 1 # 利用 transform 將 y 座標反轉, 且 offset canvas.height # (X scale, X skew, Y skew, Y scale, X offset, Y offset) # 配合圖形位置進行座標轉換 ctx.transform(1, 0, 0, -1, canvas.width/2+250, canvas.height/2+100) # 畫出 x 與 y 座標線 # 各座標值放大 8 倍 ratio = 8 ''' ctx.moveTo(0, 0) ctx.lineTo(0, 100) ctx.moveTo(0, 0) ctx.lineTo(100, 0) ''' ctx.moveTo(0, 0) ctx.lineTo(-30*ratio, 0) start_point = fourbar_list[0].split(\",\") ctx.moveTo(float(start_point[0])*ratio, float(start_point[1])*ratio) count = 0 for data in fourbar_list[1:]: point = data.split(\",\") #count = count + 1 #container1 <= str(count) + \":\" + point[0] + \",\" + point[1] #container1 <= html.BR() ctx.lineTo(float(point[0])*ratio, float(point[1])*ratio) # 設定顏色為藍色, 也可以使用 \"rgb(0, 0, 255)\" 字串設定顏色值 ctx.strokeStyle = \"blue\" # 實際執行畫線 ctx.stroke() ctx.closePath()","tags":"Misc","url":"./20161117di-shi-zhou.html"},{"title":"2016.11.03第8週","text":"今天自評~ 我負責week1 no.5 no.6 2016 11 09 19 08 45 352 from 40423140 on Vimeo . 2016 11 09 19 19 26 468 from 40423140 on Vimeo .","tags":"Misc","url":"./20161103di-8zhou.html"},{"title":"2016.10.13第五週","text":"刪除指令:git rm -rf 參考的連結https://blog.longwin.com.tw/2015/05/git-submodule-add-remove-2015/ 這禮拜的作業就是小組的blog要出來及個人的要新增 小組:https://40423106.github.io/2016fallcadp_ag4/blog/index.html 個人:https://40423107.github.io/2016fallcadp_hw","tags":"Misc","url":"./20161013di-wu-zhou.html"},{"title":"2016.10.06第四週","text":"2016.10.06 機械設計系的目標: 培養具創造力 精通表達 能積極配合 偕同產品設計流程的機械設計工程師 創造力=自學力+程式力+想像力 表達=oral,text,2D,3D,analytical,physical 協同產品設計=computer,network,tools,project 工業4.0=客製化,體貼 設proxy=proxy.mde.tw 3128 近端裝pelican: pip install pelican","tags":"Misc","url":"./20161006di-si-zhou.html"},{"title":"2016.09.22第二週","text":"2016.09.22 NOTE 1.先到 https://github.com/mdecourse 的 2016cadp 按 Fork 2.在自己的github帳號創立一個 2016fallcadp_hw倉儲 把最下面的 Add.gitignore輸入 Python Add a license輸入 Agpl 3.在 2016fallcadp_hw倉儲 建立gh-pages分支 4.按上方的一個setting-branches-選擇gh-pages 5.在系上的電腦 輸入 140.130.17.17/2016fall 下載近端的python 6.在自己的帳號建立 40423107.github.io 說明打 my home page 把最下面的 Add.gitignore輸入 Python Add a license輸入 Agpl 7.在 40423107.github.io倉儲的左上角有一個 Create new file點進去 新增 40423107.github.io.index.html 就會有自己的網頁了 8.進入 https://github.com/mdecourse/2016fallcadp/wiki 的上課筆記 下載繪圖軟體練習零件繪製: http://solvespace.com/bracket.pl","tags":"Misc","url":"./20160922di-er-zhou.html"},{"title":"2016.09.15第一週","text":"","tags":"Misc","url":"./20160915di-yi-zhou.html"},{"title":"2016Fall 簡報與網誌系統","text":"這個系統共集結了 reveal.js 網際簡報與 pelican 靜態網誌系統. 網誌 Category 網誌 Tags reveal.js 使用導引","tags":"Misc","url":"./2016fall-jian-bao-yu-wang-zhi-xi-tong.html"}]};