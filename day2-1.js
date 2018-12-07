const test = ['abcdef',
'bababc',
'abbcde',
'abcccd',
'aabcdd',
'abcdee',
'ababab'];

const input = ['fonbsmjyqugrapsczckghtvdxl',
'fonpsmjyquwrnpeczikghtvdxw',
'fonbsmdymuwrapexzikghtvdxl',
'fonwsmjyquwrapeczikghttdpl',
'fonbsmjkquwrapeczjkghtvdxx',
'yonbsmjyquwrapecgikghtvdxc',
'donbsmjyquqrapeczikghtadxl',
'monbsmjyquprgpeczikghtvdxl',
'fonbsmjyquwvapecqgkghtvdxl',
'fonbsmjyquwrkphczikghsvdxl',
'fonbomjyeuwvapeczikghtvdxl',
'fonwsmjyjuwrapoczikghtvdxl',
'foybsmjyquwcapeczikghsvdxl',
'fonbsmjyquwrtaeczikgptvdxl',
'ponbsmpyquwjapeczikghtvdxl',
'flnbcmjyquwrqpeczikghtvdxl',
'fonbsmjyquwrapegzikvbtvdxl',
'fonbjmjyqgwrazeczikghtvdxl',
'zoabsmjyquwkapeczikghtvdxl',
'fonbsmjyquwrapecziktxkvdxl',
'fonbsxjyrpwrapeczikghtvdxl',
'fonbsmjbquwqapeciikghtvdxl',
'lonbsmjyquwraphczikghtvdul',
'ftnbsmjyquwrapcczikghtxdxl',
'fonbsmjyqgwrapeczikghtldxc',
'fonbsmjsquwmapeyzikghtvdxl',
'fonbsmjyqfwrapecziqghtgdxl',
'yonbsmjyquwraveczikgftvdxl',
'fovbsmjyquwrapeczikggkvdxl',
'fonbsmjyquwrapezzikghbvdvl',
'fonzsmxyquwrapeczukghtvdxl',
'fonbemjyquwrapevzikghtvrxl',
'conbsxjxquwrapeczikghtvdxl',
'fonbsmjsmewrapeczikghtvdxl',
'folbsmjyqhwrapqczikghtvdxl',
'fonbsmjyquwrzneczikghtvdxn',
'fonbsmjyquirapeczikjhtvdll',
'fontsmgyquwrgpeczikghtvdxl',
'fonbsmjyauwrapeczbfghtvdxl',
'ftnbsmjyquwrapecpifghtvdxl',
'fonvsmjyqewrapeczikghlvdxl',
'fonbsljyquwrapecziklhtvdxw',
'fonbbmjyquwrapeczikghvadxl',
'ponbsmjyquwrspeczikghivdxl',
'fonbsmjcquwrapeccikghtvuxl',
'fonbsmjnquwrapetzikghtvlxl',
'fonbsmjymuwrapeczieghtvdxr',
'ffnbsxnyquwrapeczikghtvdxl',
'fonbsmjytuwrajeczzkghtvdxl',
'fonssmjyquwhapeczikghkvdxl',
'fonbsajyuuwrapeczikghlvdxl',
'fonbsmjyquwrapeczihghtcixl',
'fohbsmjyquwrapzczirghtvdxl',
'fonbsmjyquwrapecjqnghtvdxl',
'fonbsmjytuhrapeczihghtvdxl',
'foabumjyquwrapeczikghtvdxz',
'conbsmjyqtwrapeczikggtvdxl',
'fonbsmjyiqwrapeczokghtvdxl',
'fondsmjypuwrapeczikghtvjxl',
'fonbswjyquwrapeczikgvtydxl',
'fonbsmjyqqwrapeczikkhtvdbl',
'fonbsmjyquwrapemzitghtvdsl',
'fonbsmjyquwrspecziegxtvdxl',
'fonbsmpyquwrgpeczikghtwdxl',
'fodbsmjqquwrapeczmkghtvdxl',
'fonbsmjkquwrapeczikghpvdxr',
'fonbsmjyquwrapeczikshzvmxl',
'fznbsmjyqulrapeczikghkvdxl',
'fonbsmjyquwripeczikghtbdjl',
'fcnbsmjyquzrapecyikghtvdxl',
'ronbxmjyquwrapeczikghgvdxl',
'fonbsmuyvuwrgpeczikghtvdxl',
'fonbsmjyyuwraplczikghtudxl',
'poxbsmjyqewrapeczikghtvdxl',
'foabsmjyquwrapecziqghtvpxl',
'ponbsmjrquwrapeczikchtvdxl',
'fonzzmjyquwrapeczikghtvdxs',
'wonbsmjyquwghpeczikghtvdxl',
'fofbsejyquwrapeczikgctvdxl',
'ponbsmjyquwrayegzikghtvdxl',
'fonbumjyquwripeczikghtvdxf',
'fonbsmqyquwrapeczikgftvdxv',
'qonbsmjyquwraplczitghtvdxl',
'fmnbsajdquwrapeczikghtvdxl',
'fonbsrjyquwrapempikghtvdxl',
'fonbsmjyquwrapeczikgotudxw',
'fonbsmtyquwrapeflikghtvdxl',
'fzqbsmjyquwrapecjikghtvdxl',
'fdnbsmjyquwraqeclikghtvdxl',
'fvnbsijyquwrapechikghtvdxl',
'fovbsmjyquwsapeczikghqvdxl',
'ffjbsmjyqgwrapeczikghtvdxl',
'fonbsmjyquwrapeczvkhhivdxl',
'forbamjjquwrapeczikghtvdxl',
'fonbwmjyquwtapeyzikghtvdxl',
'fonvsmjyquwrapeczikglnvdxl',
'fonnsmjyguwrapeczikghtvxxl',
'fopbsmjyquwrapeczikghtvaxz',
'fonbsmjyquwiapeczikrhavdxl',
'fonbsujyquwrapeczikthtvdjl',
'fonpsmkyeuwrapeczikghtvdxl',
'fonbsmjyquwrapeczqkgttvdxk',
'fonbsmjyqzwrapeczikgrtddxl',
'fokbsmjiquwrapeczikgltvdxl',
'fonbsmjyqbwrapeczikghttdxo',
'fonbsejyquwrapeczikghbvdal',
'fonblmjyquwyaveczikghtvdxl',
'fonbsmjyquwlzpepzikghtvdxl',
'fonbsmjyqulrapbczigghtvdxl',
'fonbsmjyxuwrapecziyghtvsxl',
'fonbyjjyquwrapeczikghtvdxn',
'fonbhmjyquwrapeczikghtjhxl',
'fonbspjykuwraieczikghtvdxl',
'aonbsmjyquwwapeczikchtvdxl',
'fombsmjyquwyapeczikghtvdll',
'fonbsmjynuwrapeczivgbtvdxl',
'xonbsmjfquwrapeczikghqvdxl',
'fonbyzjyquwzapeczikghtvdxl',
'fbnbsmjyquwrapeczimgvtvdxl',
'qonbsmjyquwraoeczikgftvdxl',
'fonbsrjyquwrapeczikghtvjxm',
'fonbsmjyquwrapxjzykghtvdxl',
'fonbwgjyquwrapecziklhtvdxl',
'fonjcmjyouwrapeczikghtvdxl',
'fonbsmjyquwrapefzisuhtvdxl',
'fonbsmjyqywrspeczikghtvnxl',
'qonbsmjyquwrapeczlkuhtvdxl',
'fonbsmjyqlprapeczikghtvdbl',
'fonbsmjzquwrapedzikfhtvdxl',
'fonbsmjyquwrapeczizghtvjxq',
'fonbsmxyquwrrpeczikghtvcxl',
'fonpsmjyquwoapeczikghjvdxl',
'fonbshkyauwrapeczikghtvdxl',
'fonbsmjysuwrapeczilghpvdxl',
'fovwsxjyquwrapeczikghtvdxl',
'fonbsmjyquwrppecnikghmvdxl',
'fonbkmjyiuwrrpeczikghtvdxl',
'gonbsmjyquwrapeczikphtudxl',
'foncsmjyqlwrapeczimghtvdxl',
'fonbsmjhquwrtpeczikghtvdxg',
'fogbsmjyquarapeczikghtvdil',
'fonbsmjyquwraperzekghwvdxl',
'fonbstjyquwrapeczicghtedxl',
'fonbsmjoquhrapeczikgotvdxl',
'fonbsmjykuwrareczikgdtvdxl',
'fonbsmjyvuwrayeczivghtvdxl',
'fonbzmgyquwraptczikghtvdxl',
'fonbsmjyqubrapeczikgftvdxb',
'fonbgmjyjuwrapeczikghtvdul',
'fonbsmjzqurrapeczikghtvfxl',
'fonbsmjyiuwrapeczikgstvtxl',
'fpnbstjyquwrapeczikghtvdcl',
'fonbpmjyquwrapeczivghtndxl',
'fonbsmjyquwrapeczilgptvvxl',
'fonbsmjyqdwripecbikghtvdxl',
'fonbsmjytuwgapnczikghtvdxl',
'fonbsejyquwrapedzikghtvdml',
'fonbsojyqdwrapeczikghtgdxl',
'fonbsmjykuwrayeczicghtvdxl',
'foubsmtyquwrapeczikchtvdxl',
'fonbqmjyqukrapeyzikghtvdxl',
'fonbsmjyquwaapenzikghtvdwl',
'fonbsmeyquwrapeyzixghtvdxl',
'fonusmjyquhrapeczikgytvdxl',
'fonbsmjyquwrapwazikqhtvdxl',
'fonwsmeyquwrapeczikghhvdxl',
'fonmsmjyquxrspeczikghtvdxl',
'fonqsmjyqxwrapeczikghtvdml',
'fonfsmjyquwrapeuzikgatvdxl',
'fonvsmjyquwrapeczikgrtvdul',
'fonbsmayquwrapeczikihtvdxm',
'fonbsmnyquwrapecdifghtvdxl',
'fonbsmjyeuwraseczikghtvdxo',
'fonbvvjyquwrapeczikghtvdxi',
'fonbsmjyquwrapeczbkghtorxl',
'tonbsmjyqvwrapeczikghtvdcl',
'fonbsmjyquwrapeczhkgbtvdkl',
'fonqsmjyquwrapenzibghtvdxl',
'fontsmeyqudrapeczikghtvdxl',
'qonbsmjyauwrapeczikghtvdbl',
'fynbsmjyluwrapeczekghtvdxl',
'fonbsmjhquwrappczikghtvdxt',
'conbsmjyquwrapeczikahtvdxz',
'fonbsmjyquorapeczikvftvdxl',
'fonbsriyquwrapeczikchtvdxl',
'yonfsmjyquwrapeczikghtvdxq',
'fonaomjyquwrapecziwghtvdxl',
'fonbsxsyqdwrapeczikghtvdxl',
'fonbsqjyouwrapeczikgltvdxl',
'fonbstsyquwraleczikghtvdxl',
'fonbsmjyquwraoecztkghtvdsl',
'fonbsmjyquwrapezzjkghmvdxl',
'fonbwmjyqnwrapecpikghtvdxl',
'fonbsmvyqbwrapeczikghtvdsl',
'fonbsijyquwrazeczikghtvdwl',
'fonbsmjyouwrapewzikghtldxl',
'xonbsmjyqcwrapeczikghtvdul',
'fonbgmjxquwrajeczikghtvdxl',
'fokbsmjyquwrapechikghtrdxl',
'fonbqmjyqawrapeczikghtrdxl',
'fonbwmjzquwtapeyzikghtvdxl',
'fonbsmjyquwrapecdikgatvdnl',
'fonbsmjyqowrkpeczikghtvdxj',
'fonbsmjyquwkapejzikuhtvdxl',
'fonbsmjyquwrabeozikghtmdxl',
'fonbsijyeuwrapeczikghtvdxh',
'fonbsmjhquprapeczizghtvdxl',
'fonesmjyquwrapcczikghtvdxh',
'fonbamjyquwrapeczifrhtvdxl',
'foabsmjyquwpapeczikghtvdxs',
'fonbsmjyquwrapeczukghivdxh',
'fonbsejyoulrapeczikghtvdxl',
'fonbsmjyquwraceczikgdmvdxl',
'eonbsmjyquerppeczikghtvdxl',
'ffnzsmjyquwgapeczikghtvdxl',
'donbsmyyquwrapeczirghtvdxl',
'fjnbsmjyqufrapeczikghtwdxl',
'fonfsmjyquwrareczigghtvdxl',
'fonusmjyquwrapeczikgetvexl',
'tonbsmjyqpwrapeczikghtjdxl',
'fonbsmjhqukkapeczikghtvdxl',
'fonbsmjyqusraseczikghtvzxl',
'fonbsmjyquygapeczxkghtvdxl',
'folbsmjyquwraqeczikghjvdxl',
'fonbsmjyquwrppecjinghtvdxl',
'fonbsmjyquwraepczhkghtvdxl',
'fonbfmjyquwrapeczisghtrdxl',
'fsnbsmjwqubrapeczikghtvdxl',
'fonbspjyquwrapjczikghtedxl',
'fowbsmjyquwrapeczikghtbdbl',
'fonbymjyquwrapeczikghlvdrl',
'fonbsmjyruwrapecbikghtvixl',
'fonyqmjyqufrapeczikghtvdxl',
'focbscjyquwrapeczmkghtvdxl',
'fonbsmjyqtwnkpeczikghtvdxl',
'eonbsmjyquwrameczizghtvdxl',
'zonbsmjyqcwrapeczikghtvhxl',
'foubsmjyquwrapehzikghtvnxl',
'ffnbsmjyquwrapetzikghtjdxl',
'fonbjgjyquwrapkczikghtvdxl',
'fonbwmjyquwqapeczdkghtvdxl',
'forbsmjyquwrapeczikkhtvdml',
'fonbsmjyiuwrapeczivghevdxl',
'fonbsmjyquwrapeglikghwvdxl',
'fopgsmjyquwrapegzikghtvdxl',
'fonbsmjyqzwrajeczikghtldxl',
'fonbsmjyruwrapexzmkghtvdxl',
'fonbsmjyquwrdpeczikxstvdxl',
'fonbsmjyquwrapeezivghtvdql',
'fonbdmjyqujsapeczikghtvdxl'];

function checkForN(input, n) {
    var chars = {};
    input.split('').forEach(letter => {
        if (!chars[letter]) {
            chars[letter] = 0;
        }
        chars[letter]++;
    });
    var match = false;
    Object.keys(chars).forEach(key => {
        if (chars[key] === n) {
            match = true;
        }
    });
    return match;
}

var two = input.reduce((a, v) => {
    if (checkForN(v, 2)) {
        return a + 1;
    }
    return a;
}, 0);

var three = input.reduce((a, v) => {
    if (checkForN(v, 3)) {
        return a + 1;
    }
    return a;
}, 0);

console.log(two, three, two * three);