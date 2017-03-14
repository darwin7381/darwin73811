---
title: Markdown練習
date: 2017-01-23 15:55:52
tags: Markdown
---

## Markdown簡介
>Markdown的目標是實現「易讀易寫」，最大靈感來源其實是純文字的電子郵件格式。

Markdown的語法有個主要的目的：用來作為一種網路內容的寫作用語言
他並不是用來取代html，html已經很容易寫了，Markdown的重點在於讓文件更易讀、編寫。
html是一種發佈格式，Markdown是一種編寫的個是，因此Markdown格式只涵蓋純文字可以涵蓋的範圍

### 行內HTML

1. 區塊元素
    如``<div>、<table>、<pre>、<p>``等標籤，必需在前後加上空行，以利與內容區隔。
    例如：在Markdown中加入HTML表格

    <table>
        <tr>
            <td>哈妮貓</td>
            <td>小貓</td>
            <td>酷貓</td>
            <td>大貓</td>
        </tr>
    </table>

    Markdown語法在HTML區塊標籤中將不會被進行處理。

2. 區段標籤
    如``<span>、<cite>、<del>``則不受限制，可以在Markdown的段落、清單或是標題裡任意使用。舉例說明：如果比較喜歡HTML的``<a>``或``<img>``標籤，可以直接使用這些標籤。

    HTML區段標籤和區塊標籤不同，在區段標籤的範圍內，Markdown的語法是有效的。

### 特殊字元轉換
在HTML中，必須使用實體形式ex: &lt;和&amp;
Markdown中允許直接使用，但要小心跳脫字元的使用

## 區塊元素
#### 標題

1. ``=``為最高標題，``-``為第二標題

    ```
    This is the title
    =====
    this is subtitle
    ----
    ```
2. 插入1~6``#``分別對應到1~6階
    ```
    # title
    ## title
    ### title
    #### title
    ##### title
    ###### title
    ```


#### 引言
>每一行都加上 ``>``

```
> This is a blockquote with two paragraphs. Lorem ipsum dolor sit amet,
> consectetuer adipiscing elit. Aliquam hendrerit mi posuere lectus.
> Vestibulum enim wisi, viverra nec, fringilla in, laoreet vitae, risus.
> 
> Donec sit amet nisl. Aliquam semper ipsum sit amet velit. Suspendisse
> id sem consectetuer libero luctus adipiscing.
```

>也可以只在第一行加上 ``>``

```
> This is a blockquote with two paragraphs. Lorem ipsum dolor sit amet,
consectetuer adipiscing elit. Aliquam hendrerit mi posuere lectus.
Vestibulum enim wisi, viverra nec, fringilla in, laoreet vitae, risus.

> Donec sit amet nisl. Aliquam semper ipsum sit amet velit. Suspendisse
id sem consectetuer libero luctus adipiscing.
```

>引言內的引言：再加一層 ``>``

```
> This is the first level of quoting.
>
> > This is nested blockquote.
>
> Back to the first level.
```

#### List
>Unorder List ``* + -`` 做開頭

```
*   Cat
*   Dog
+   Cat
+   Dog
-   Ubuntu
-   Ubuntu
```
>Order List 數字. 做開頭，數字並不會影響結果

```
1.  Bird
1.  McHale
1.  Parish
3. Bird
1. McHale
8. Parish
```

如果清單項目間用空行分開， Markdown會把項目的內容在輸出時用<p>標籤包起來
```
*   Bird

*   Magic
```
會變成
```
<ul>
<li><p>Bird</p></li>
<li><p>Magic</p></li>
</ul>
```

如果要放程式碼區塊的話，該區塊就需要縮排兩次，也就是8個空白或是兩個tab

```
*   A list item with a code block:

        <code goes here>
```


#### 程式碼
>簡單地縮排4個空白或是1個tab就可以

```
This is a normal paragraph:

    This is a code block.
```
程式碼區塊會一直持續到縮排結束為止

>Markdown會自動轉換特殊符號

    <div class="footer">
        &copy; 2004 Foo Corporation
    </div>

變成
    <pre><code>&lt;div class="footer"&gt;
    &amp;copy; 2004 Foo Corporation
    &lt;/div&gt;
    </code></pre>

#### 分隔線
>一行中用三個或以上的星號、減號、底線建立
    * * *
    ***
    *****
    - - -
    ---------------------------------------

## 區段元素

#### 連結
>[]內放連結文字後面用()包住網址
    [連結](http://example.com/)
若要加入Title：
    [連結](http://example.com/ "Title")

>也可以使用相對路徑
    [關於](/about/)


# 未讀
> 參考連結

<!-- ---------------------------------
參考形式的連結使用另外一個方括號接在連結文字的括號後面，而在第二個方括號裡面要填入用以辨識連結的標籤：

This is [an example][id] reference-style link.
你也可以選擇性地在兩個方括號中間加上空白：

This is [an example] [id] reference-style link.
接著，在文件的任意處，你可以把這個標籤的連結內容定義出來：

[id]: http://example.com/  "Optional Title Here"
連結定義的形式為：

方括號，裡面輸入連結的辨識用標籤
接著一個冒號
接著一個以上的空白或tab
接著連結的網址
選擇性地接著title內容，可以用單引號、雙引號或是括弧包著
下面這三種連結的定義都是相同：

[foo]: http://example.com/  "Optional Title Here"
[foo]: http://example.com/  'Optional Title Here'
[foo]: http://example.com/  (Optional Title Here)
請注意：有一個已知的問題是Markdown.pl 1.0.1會忽略單引號包起來的連結title。

連結網址也可以用方括號包起來：

[id]: <http://example.com/>  "Optional Title Here"
你也可以把title屬性放到下一行，也可以加一些縮排，網址太長的話，這樣會比較好看：

[id]: http://example.com/longish/path/to/resource/here
    "Optional Title Here"
網址定義只有在產生連結的時候用到，並不會直接出現在文件之中。

連結辨識標籤可以有字母、數字、空白和標點符號，但是並不區分大小寫，因此下面兩個連結是一樣的：

[link text][a]
[link text][A]
預設的連結標籤功能讓你可以省略指定連結標籤，這種情形下，連結標籤和連結文字會視為相同，要用預設連結標籤只要在連結文字後面加上一個空的方括號，如果你要讓"Google"連結到google.com，你可以簡化成：

[Google][]
然後定義連結內容：

[Google]: http://google.com/
由於連結文字可能包含空白，所以這種簡化的標籤內也可以包含多個文字：

Visit [Daring Fireball][] for more information.
然後接著定義連結：

[Daring Fireball]: http://daringfireball.net/
連結的定義可以放在文件中的任何一個地方，我比較偏好直接放在連結出現段落的後面，你也可以把它放在文件最後面，就像是註解一樣。

下面是一個參考式連結的範例：

I get 10 times more traffic from [Google] [1] than from
[Yahoo] [2] or [MSN] [3].

  [1]: http://google.com/        "Google"
  [2]: http://search.yahoo.com/  "Yahoo Search"
  [3]: http://search.msn.com/    "MSN Search"
如果改成用連結名稱的方式寫：

I get 10 times more traffic from [Google][] than from
[Yahoo][] or [MSN][].

  [google]: http://google.com/        "Google"
  [yahoo]:  http://search.yahoo.com/  "Yahoo Search"
  [msn]:    http://search.msn.com/    "MSN Search"
上面兩種寫法都會產生下面的HTML。

<p>I get 10 times more traffic from <a href="http://google.com/"
title="Google">Google</a> than from
<a href="http://search.yahoo.com/" title="Yahoo Search">Yahoo</a>
or <a href="http://search.msn.com/" title="MSN Search">MSN</a>.</p>
下面是用行內形式寫的同樣一段內容的Markdown文件，提供作為比較之用：

I get 10 times more traffic from [Google](http://google.com/ "Google")
than from [Yahoo](http://search.yahoo.com/ "Yahoo Search") or
[MSN](http://search.msn.com/ "MSN Search").
參考式的連結其實重點不在於它比較好寫，而是它比較好讀，比較一下上面的範例，使用參考式的文章本身只有81個字元，但是用行內形式的連結卻會增加到176個字元，如果是用純HTML格式來寫，會有234個字元，在HTML格式中，標籤比文字還要多。

使用Markdown的參考式連結，可以讓文件更像是瀏覽器最後產生的結果，讓你可以把一些標記相關的資訊移到段落文字之外，你就可以增加連結而不讓文章的閱讀感覺被打斷。
-------------------------------
 -->

#### 強調
> Markdown使用星號``*``和底線``_``作爲強調符號，用``<em>``包住，用兩個``*``和``_``則會轉成``<strong>``
    *single asterisks*

    _single underscores_

    **double asterisks**

    __double underscores__

> 要在文字後加入普通符號時，運用反斜線

    \*this text is surrounded by literal asterisks\*

#### 跳脫字元
> 用反斜線

    \*這是星星的內容!!!\*

> 可用反斜線的符號
    
    \   反斜線
    `   反引號
    *   星號
    _   底線
    {}  大括號
    []  方括號
    ()  括號
    #   井字號
    +   加號
    -   減號
    .   英文句點
    !   驚嘆號



#### 程式碼
> 想表達程式碼時，可以用```包覆
    
    This is the `code` !
> 插入```時，要用更多```包覆

    ``This is the code(`) ``

#### 圖片
> 行內圖片

    ![text](/path/img.jpg)
    ![text](/path/img.jpg "Optional title")
> 參考圖片

    ![text][id]
id為參考連結的名稱
定義：
    [id]: url/to/image  "Optional title attribute"
也可以用普通的img標籤

#### 自動連結
> 直接包起來
    <http://Sample.com/>
    <darwin7381987654@gmail.com>
### Reference
1 [Markdown文件](http://markdown.tw)


