import {dataConnection} from '../config/database';

// entities
import {Recipe} from '../entities/Recipe';
import {RecipeIngredient} from '../entities/RecipeIngredient';
import {RecipeStep} from '../entities/RecipeStep';
import {RecipeTag} from '../entities/RecipeTag';

const recipes = [
  {
    title: 'Cháo thịt heo bí đỏ',
    description: 'Cháo thịt heo bí đỏ cung cấp đầy đủ dinh dưỡng và năng lượng cho các hoạt động hằng ngày của các bé. Bạn có thể thêm món này vào thực đơn ăn dặm, bé sẽ thích lắm đây. Chỉ với 40 phút thực hiện.',
    prepare_time: 10,
    total_time: 40,
    number_persons: 2,
    image: 'https://image.cooky.vn/recipe/g1/393/s640/Recipe393-635402710349446250.jpg',
    sub_category_id: 1,
    ingredients: [
      {
        name: 'Cháo',
        quantity: 20,
        unit: 'Gr',
      },
      {
        name: 'Bí đỏ',
        quantity: 10,
        unit: 'Gr',
      },
      {
        name: 'Thịt nạc',
        quantity: 10,
        unit: 'Gr',
      },
      {
        name: 'Dầu ăn',
        quantity: 1,
        unit: 'Muỗng canh',
      },
      {
        name: 'Nước',
        quantity: 200,
        unit: 'ml',
      },
    ],
    step: [
      {
        content: 'Bí đỏ gọt vỏ, cắt miếng vừa phải rồi cho vào nồi nước luộc chín. Sau đó vớt ra để vào chén và tán nhuyễn.',
      },
      {
        content: 'Cho thịt heo vào nấu với nước tới chín. Thịt heo bạn mua loại thịt nạc đã xay sẵn hoặc bằm nhỏ nhé!',
      },
      {
        content: 'Cho bí đỏ vào nấu mềm, để cho bớt nóng. Trộn cháo trắng nấu sẵn hoặc bột gạo vào, thêm dầu ăn, khuấy đều.',
      },
      {
        content: 'Sau khi để nguội bớt, có thể thưởng thức món cháo thịt heo bí đỏ rồi!',
      },
    ],
    tag: [
      {
        content: 'Cháo',
      },
      {
        content: 'Thịt heo',
      },
      {
        content: 'Bí đỏ',
      },
    ],
  },
  {
    title: 'Món chính',
    description: 'Bún Chay là món ăn sáng được rất nhiều người yêu thích bởi vị ngon tự nhiên, hấp dẫn. Cách nấu bún chay kiểu Huế khá đơn giản với nước dùng ngọt tự nhiên từ rau củ thơm lừng, và đậm đà.',
    prepare_time: 15,
    total_time: 60,
    number_persons: 2,
    image: 'https://image.cooky.vn/recipe/g3/20185/s640/cooky-recipe-636318376852793754.jpg',
    sub_category_id: 1,
    ingredients: [
      {
        name: 'Bí đỏ',
        quantity: 500,
        unit: 'gr',
      },
      {
        name: 'Củ cải trắng',
        quantity: 300,
        unit: 'gr',
      },
      {
        name: 'Thơm',
        quantity: 1,
        unit: 'Trái',
      },
      {
        name: 'Cải thảo',
        quantity: 250,
        unit: 'gr',
      },
      {
        name: 'Cà chua',
        quantity: 300,
        unit: 'gr',
      },
      {
        name: 'Nấm rơm',
        quantity: 200,
        unit: 'gr',
      },
      {
        name: 'Đậu hũ chiên',
        quantity: 2,
        unit: 'Miếng',
      },
      {
        name: 'Sả',
        quantity: 4,
        unit: 'Cây',
      },
      {
        name: 'Hành boa rô',
        quantity: 5,
        unit: 'Cây',
      },
      {
        name: 'Hạt nêm chay',
        quantity: 2,
        unit: 'Muỗng canh',
      },
      {
        name: 'Đường phèn',
        quantity: 1,
        unit: 'Muỗng canh',
      },
      {
        name: 'Dầu điều',
        quantity: 1,
        unit: 'Muỗng canh',
      },
      {
        name: 'Bún tươi',
        quantity: 500,
        unit: 'Gr',
      },
    ],
    step: [
      {
        content: 'Nguyên liệu nấu bún chay: Rau sống rửa sạch để ráo. Rau củ quả rửa sạch cắt khúc, lá hành boa-rô cắt khúc.',
      },
      {
        content: 'Cách nấu bún chay: Cho tất cả rau củ quả vào nồi, rồi cho nước, ít muối vào hầm cho ra nước ngọt, hầm đến khi hỗn hợp mềm.',
      },
      {
        content: 'Cho nồi nước dùng bún chay đã lược lại lên bếp, củ cải trắng (đã nấu chín), thơm cắt miếng, cọng sả đập dập, ít cọng trắng đầu hành boa rô cắt khúc',
      },
      {
        content: 'Sốt nấm ăn kèm bún chay Huế: Cho ít dầu ăn vào chảo, dầu nóng cho đầu hành boa rô băm nhỏ vào phi thơm rồi cho cà chua cắt hạt lựu vào xào',
      },
      {
        content: 'Bày trí bún chay kiểu Huế: Múc sốt nấm ra tô. Cho bún đã trụng nóng vào tô, vài miếng thơm, đậu hũ, củ cải trắng. Rồi chan nước dùng lên tô bún',
      },
    ],
    tag: [
      {
        content: 'Bún',
      },
      {
        content: 'Chay',
      },
    ],
  },
  {
    title: 'Súp Hoành Thánh Lá',
    description: 'Hoành thánh bắt nguồn từ người Hoa, du nhập và được biến tấu để phù hợp với khẩu vị người Việt nhưng vẫn giữ được nét đặc trưng.',
    prepare_time: 11,
    total_time: 45,
    number_persons: 4,
    image: 'https://image.cooky.vn/recipe/g6/50103/s640/cooky-recipe-cover-r50103.jpg',
    sub_category_id: 2,
    ingredients: [
      {
        name: 'Vỏ hoành thánh',
        quantity: 300,
        unit: 'Gr',
      },
      {
        name: 'Xương ống',
        quantity: 300,
        unit: 'Gr',
      },
      {
        name: 'Huyết heo',
        quantity: 200,
        unit: 'Gr',
      },
      {
        name: 'Tôm tươi',
        quantity: 200,
        unit: 'Gr',
      },
      {
        name: 'Trứng cút',
        quantity: 10,
        unit: 'Quả',
      },
      {
        name: 'Hẹ',
        quantity: 20,
        unit: 'Gr',
      },
      {
        name: 'Cần tàu',
        quantity: 20,
        unit: 'Gr',
      },
      {
        name: 'Hạt nêm',
        quantity: 2,
        unit: 'Muỗng canh',
      },
      {
        name: 'Muối',
        quantity: 2,
        unit: 'Muỗng canh',
      },
      {
        name: 'Đường trắng',
        quantity: 2,
        unit: 'Muỗng canh',
      },
    ],
    step: [
      {
        content: 'Cho 300gr xương ống chặt khúc nhỏ hầm với 600ml nước chờ sôi bùng vớt bọt cho nước dùng trong. Hầm 30 phút rồi tắt bếp.',
      },
      {
        content: 'Cắt đều thành 4 phần 300gr lá hoành thánh. Đun sôi nồi nước ở lửa vừa, cho lá hoành thánh vào luộc chín. ',
      },
      {
        content: 'Khi nước dùng sôi, nêm 2 muỗng cà phê hạt nêm, 2 muỗng cà phê muối, 2 muỗng cà phê đường rồi cho tiếp 200gr huyết, 200gr tôm làm sạch.',
      },
      {
        content: 'Cuối cùng cho thêm lá hoành thánh vào nấu sôi súp, tắt bếp múc ra tô rồi rắc lên 1 ít cần tàu và hẹ cắt khúc.',
      },
      {
        content: 'Vậy món súp hoành thánh lá theo công thức Cooky đã hoàn thành, tùy theo sở thích bạn có thể biến tấu thêm giò gân hoặc giò nạc ăn kèm.',
      },
    ],
    tag: [
      {
        content: 'hành lá',
      },
      {
        content: 'súp',
      },
    ],
  },
  {
    title: 'Sốt Việt Quất',
    description: 'Sốt việt quất đơn giản, dễ thực hiện, việt quất có bán trong các siêu thị, việt quất chứa nhiều chất chống oxi hóa, có lợi cho sức khỏe.',
    prepare_time: 5,
    total_time: 50,
    number_persons: 8,
    image: 'https://image.cooky.vn/recipe/g6/52389/s640/cooky-recipe-cover-r52389.jpg',
    sub_category_id: 3,
    ingredients: [
      {
        name: 'Việt quất',
        quantity: 160,
        unit: 'Gr',
      },
      {
        name: 'Đường trắng',
        quantity: 30,
        unit: 'Gr',
      },
      {
        name: 'Bột năng',
        quantity: 1,
        unit: 'Muỗng canh',
      },
      {
        name: 'Nước cốt chanh',
        quantity: 1,
        unit: 'Muỗng canh',
      },
    ],
    step: [
      {
        content: 'Rửa sạch quả việt quất, để ráo nước, đổ việt quất, nước, đường, nước cốt chanh/quất vào nồi.',
      },
      {
        content: 'Đun lửa vừa, đến khi quả việt quất mềm nhũng có thể ấn bẹp thì đổ phần bột năng/bột ngô vào nồi, khuấy đều.',
      },
      {
        content: 'Khuấy đều đến khi phần sốt đặc thì tắt bếp, có thể dùng muỗng/phới lồng ấn bẹp hết quả việt quất nếu muốn sốt mịn không có quả.',
      },
      {
        content: 'Khi sốt đã nguội, bảo quản trong lọ thủy tinh. ',
      },
    ],
    tag: [
      {
        content: 'Sốt',
      },
      {
        content: 'nhanh',
      },
    ],
  },
];
const common = [
  {
    title: 'Món chính',
    description: '',
    prepare_time: '',
    total_time: '',
    number_persons: '',
    image: '',
    sub_category_id: '',
    ingredients: [
      {
        name: '',
        quantity: '',
        unit: '',
      },
      {
        name: '',
        quantity: '',
        unit: '',
      },
      {
        name: '',
        quantity: '',
        unit: '',
      },
      {
        name: '',
        quantity: '',
        unit: '',
      },
      {
        name: '',
        quantity: '',
        unit: '',
      },
      {
        name: '',
        quantity: '',
        unit: '',
      },
      {
        name: '',
        quantity: '',
        unit: '',
      },
      {
        name: '',
        quantity: '',
        unit: '',
      },
      {
        name: '',
        quantity: '',
        unit: '',
      },
      {
        name: '',
        quantity: '',
        unit: '',
      },
    ],
    step: [
      {
        content: '',
      },
      {
        content: '',
      },
      {
        content: '',
      },
      {
        content: '',
      },
      {
        content: '',
      },
    ],
    tag: [
      {
        content: '',
      },
    ],
  },
];


export const recipeSeeder = async () => {
  const recipeRepo = dataConnection.getRepository(Recipe);
  const recipeIngredientRepo = dataConnection.getRepository(RecipeIngredient);
  const recipeStepRepo = dataConnection.getRepository(RecipeStep);
  const recipeTagRepo = dataConnection.getRepository(RecipeTag);

  for (let item of recipes) {
    const recipe = new Recipe();
    recipe.title = item.title;
    recipe.description = item.description;
    recipe.prepare_time = item.prepare_time;
    recipe.total_time = item.total_time;
    recipe.number_persons = item.number_persons;
    recipe.image = item.image;
    recipe.sub_category_id = item.sub_category_id;
    const recipeDB = await recipeRepo.save(recipe);

    for (let ingredient of item.ingredients) {
      const recipeIngredient = new RecipeIngredient();
      recipeIngredient.name = ingredient.name;
      recipeIngredient.quantity = ingredient.quantity;
      recipeIngredient.unit = ingredient.unit;
      recipeIngredient.recipe_id = recipeDB.id;
      await recipeIngredientRepo.save(recipeIngredient);
    }

    for (let step of item.step) {
      const recipeStep = new RecipeStep();
      recipeStep.content = step.content;
      recipeStep.recipe_id = recipeDB.id;
      await recipeStepRepo.save(recipeStep);
    }

    for (let tag of item.tag) {
      const recipeTag = new RecipeTag();
      recipeTag.content = tag.content;
      recipeTag.recipe_id = recipeDB.id;
      await recipeTagRepo.save(recipeTag);
    }
  }
};
