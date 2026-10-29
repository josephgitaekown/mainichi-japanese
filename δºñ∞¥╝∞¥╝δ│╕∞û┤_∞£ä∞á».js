// 🌱 매일 일본어 — Scriptable 위젯
// 설치 후 URL을 본인의 Netlify 사이트 주소로 바꾸세요.
const APP_URL = "https://YOUR-SITE.netlify.app/";
// 최초 학습 날짜를 YYYY-MM-DD로 수정할 수 있습니다.
const START_DATE = "2026-10-30";

const lessons = [{"title":"あ행 히라가나","focus":"あ","reading":"아","word":"あさ","meaning":"아침","example":"あさです。","translation":"아침입니다."},{"title":"か행 히라가나","focus":"か","reading":"카","word":"かさ","meaning":"우산","example":"かさです。","translation":"우산입니다."},{"title":"さ행 히라가나","focus":"さ","reading":"사","word":"さかな","meaning":"생선","example":"さかなです。","translation":"생선입니다."},{"title":"た행 히라가나","focus":"た","reading":"타","word":"たまご","meaning":"계란","example":"たまごです。","translation":"계란입니다."},{"title":"な행 히라가나","focus":"な","reading":"나","word":"なまえ","meaning":"이름","example":"なまえは キムです。","translation":"이름은 김입니다."},{"title":"は행 히라가나","focus":"は","reading":"하","word":"はな","meaning":"꽃","example":"はなが あります。","translation":"꽃이 있습니다."},{"title":"ま행 히라가나","focus":"ま","reading":"마","word":"まち","meaning":"마을","example":"ここは まちです。","translation":"여기는 마을입니다."},{"title":"や행·ら행·わ행","focus":"や","reading":"야","word":"やま","meaning":"산","example":"やまが みえます。","translation":"산이 보입니다."},{"title":"가타카나 기초","focus":"ア","reading":"아","word":"アイス","meaning":"아이스크림","example":"アイスが すきです。","translation":"아이스크림을 좋아합니다."},{"title":"탁음과 작은 っ","focus":"が","reading":"가","word":"がっこう","meaning":"학교","example":"がっこうへ いきます。","translation":"학교에 갑니다."},{"title":"명사 + です","focus":"学生","reading":"がくせい","word":"学生","meaning":"학생","example":"わたしは 学生です。","translation":"저는 학생입니다."},{"title":"명사 부정 ではありません","focus":"先生","reading":"せんせい","word":"先生","meaning":"선생님","example":"わたしは 先生ではありません。","translation":"저는 선생님이 아닙니다."},{"title":"질문문 ～ですか","focus":"日本人","reading":"にほんじん","word":"日本人","meaning":"일본인","example":"日本人ですか。","translation":"일본인이세요?"},{"title":"지시어 これ・それ・あれ","focus":"これ","reading":"고레","word":"本","meaning":"책","example":"これは 本です。","translation":"이것은 책입니다."},{"title":"조사 は / も","focus":"友達","reading":"ともだち","word":"友達","meaning":"친구","example":"わたしも 学生です。","translation":"저도 학생입니다."},{"title":"조사 の 소유","focus":"私","reading":"わたし","word":"かばん","meaning":"가방","example":"これは 私のかばんです。","translation":"이것은 제 가방입니다."},{"title":"형용사 ～い","focus":"おいしい","reading":"오이시이","word":"おいしい","meaning":"맛있다","example":"このパンは おいしいです。","translation":"이 빵은 맛있습니다."},{"title":"형용사 ～な","focus":"静か","reading":"しずか","word":"静か","meaning":"조용하다","example":"このまちは 静かです。","translation":"이 마을은 조용합니다."},{"title":"좋아하다 ～が好き","focus":"好き","reading":"すき","word":"音楽","meaning":"음악","example":"わたしは 音楽が好きです。","translation":"저는 음악을 좋아합니다."},{"title":"있다 あります / います","focus":"あります","reading":"아리마스","word":"犬","meaning":"개","example":"いぬが います。","translation":"개가 있습니다."},{"title":"장소 ～に / ～で","focus":"駅","reading":"えき","word":"駅","meaning":"역","example":"駅で まちます。","translation":"역에서 기다립니다."},{"title":"동사 ～ます","focus":"食べます","reading":"たべます","word":"ごはん","meaning":"밥","example":"ごはんを 食べます。","translation":"밥을 먹습니다."},{"title":"동사 부정 ～ません","focus":"飲みません","reading":"のみません","word":"水","meaning":"물","example":"コーヒーは 飲みません。","translation":"커피는 마시지 않습니다."},{"title":"동사 과거 ～ました","focus":"行きました","reading":"いきました","word":"昨日","meaning":"어제","example":"きのう 学校へ 行きました。","translation":"어제 학교에 갔습니다."},{"title":"동사 ～て 주세요","focus":"見て","reading":"みて","word":"写真","meaning":"사진","example":"写真を 見てください。","translation":"사진을 봐 주세요."},{"title":"～てもいいですか 허락","focus":"いいですか","reading":"이이데스카","word":"ここ","meaning":"여기","example":"ここに すわってもいいですか。","translation":"여기에 앉아도 될까요?"},{"title":"～たいです 희망","focus":"行きたい","reading":"いきたい","word":"日本","meaning":"일본","example":"日本へ 行きたいです。","translation":"일본에 가고 싶습니다."},{"title":"～から 이유","focus":"忙しい","reading":"いそがしい","word":"今日","meaning":"오늘","example":"今日は 忙しいから、行けません。","translation":"오늘은 바빠서 갈 수 없습니다."},{"title":"～たことがあります 경험","focus":"旅行","reading":"りょこう","word":"京都","meaning":"교토","example":"京都へ 行ったことがあります。","translation":"교토에 가 본 적이 있습니다."},{"title":"회화 종합: 카페 주문","focus":"ください","reading":"구다사이","word":"お茶","meaning":"차","example":"お茶を 一つください。","translation":"차 한 잔 주세요."}];
const now = new Date();
const start = new Date(START_DATE + "T00:00:00");
const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
const offset = Math.max(0, Math.floor((today - start) / 86400000));
const n = offset % lessons.length;
const lesson = lessons[n];
const green = new Color("#63BC42");
const dark = new Color("#183821");
const widget = new ListWidget();
widget.backgroundColor = new Color("#F1F9EC");
widget.setPadding(15, 16, 13, 16);
widget.url = APP_URL.includes("YOUR-SITE") ? "https://app.netlify.com/drop" : APP_URL;

const top = widget.addStack();
top.layoutHorizontally();
const brand = top.addText("🌱 매일 일본어");
brand.font = Font.boldSystemFont(13);
brand.textColor = dark;
top.addSpacer();
const count = top.addText("DAY " + (n+1));
count.font = Font.boldSystemFont(11);
count.textColor = green;
widget.addSpacer(9);
const focus = widget.addText(lesson.word);
focus.font = Font.boldSystemFont(config.widgetFamily === "small" ? 25 : 32);
focus.textColor = dark;
focus.lineLimit = 1;
const meaning = widget.addText(lesson.meaning + "  ·  " + lesson.reading);
meaning.font = Font.systemFont(12);
meaning.textColor = new Color("#526855");
meaning.lineLimit = 1;
widget.addSpacer(8);
if (config.widgetFamily !== "small") {
  const ex = widget.addText(lesson.example);
  ex.font = Font.mediumSystemFont(15);
  ex.textColor = dark;
  ex.lineLimit = 2;
  const tr = widget.addText(lesson.translation);
  tr.font = Font.systemFont(11);
  tr.textColor = new Color("#637765");
  tr.lineLimit = 1;
  widget.addSpacer(5);
}
const bottom = widget.addText("🎯 오늘의 레슨 열기  ›");
bottom.font = Font.boldSystemFont(11);
bottom.textColor = green;
widget.refreshAfterDate = new Date(now.getTime() + 60 * 60 * 1000);
if (config.runsInWidget) {
  Script.setWidget(widget);
} else {
  await widget.presentMedium();
}
Script.complete();
