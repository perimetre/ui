import { Meta, StoryFn } from '@storybook/react';
import React from 'react';
import { clampOptions } from '../../prebuiltTailwindTheme';
import classnames from 'classnames';
import { clampClassnameMap } from '../../storybookMappers';

export default {
  title: 'Components/LineClamp',
  argTypes: {
    lineClamp: {
      defaultValue: '3',
      control: {
        type: 'select',
        options: clampOptions
      }
    },
    className: {
      control: {
        type: 'text'
      }
    }
  }
} as Meta;

/**
 * A story that displays a Spinner example
 *
 * @param props the story props
 * @param props.lineClamp the lineClamp property set on controls
 * @param props.className the component classes
 */
const LineClampTemplate: StoryFn = ({ lineClamp, className, ...props }) => (
  <div {...props} className={classnames(clampClassnameMap[lineClamp || 'none'], className)}>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem explicabo facilis natus quo impedit reiciendis cum
    deleniti hic, nostrum blanditiis! Necessitatibus inventore blanditiis dolorum ea eum suscipit maxime temporibus
    voluptatem consequuntur totam? Saepe animi placeat maiores quia sequi voluptatibus, eveniet corrupti odio sed optio
    recusandae aut nemo id consequatur fugiat, eum nostrum veritatis delectus non repellendus? Beatae dolorem quibusdam
    ipsam, alias velit at quam porro omnis unde aliquid vel numquam, nemo debitis pariatur officia et totam laboriosam
    praesentium vitae, optio harum! Tempore obcaecati placeat totam, quo sint doloribus vero rerum consequatur
    laudantium explicabo minima! Soluta harum, accusamus labore nesciunt, qui est suscipit assumenda sequi dicta, ex
    facilis. Magnam deleniti odit distinctio. Omnis nemo corporis fuga molestiae, aspernatur, modi ipsum optio nam
    accusantium quod error tempora deleniti dolorum. Reprehenderit quam quasi voluptatum adipisci architecto nam
    doloremque distinctio sint, excepturi quis commodi provident magni labore eaque animi quas ipsa similique pariatur
    itaque quibusdam voluptates iure praesentium ut? Repellendus voluptate, porro ex aut alias id ducimus corporis
    aperiam laborum, voluptas ratione, laudantium dolore nemo. At similique totam dignissimos nisi, exercitationem quae
    esse temporibus nesciunt dolorum possimus fuga tempore ratione debitis. Nam, aliquam mollitia ab quod quibusdam
    delectus veritatis repudiandae dolorem fugiat iusto quasi voluptate, tempora repellat quae facere incidunt corrupti
    voluptas. Recusandae temporibus modi unde delectus voluptates totam aliquam, repudiandae maxime quis odit,
    voluptatibus illo odio, exercitationem beatae dolorum harum error obcaecati atque neque qui optio non laborum iusto.
    Explicabo quo odio cumque eaque! Illum commodi odio ut nam nisi facere totam harum expedita quos quo amet,
    repudiandae libero repellendus tempora soluta assumenda ab debitis dolorum ullam dolor nesciunt atque doloremque
    perspiciatis maiores. Tenetur voluptatum, modi, neque fuga suscipit numquam necessitatibus quod dolorem
    reprehenderit consequatur consectetur eum quia voluptas hic, at animi impedit explicabo corporis facere ad odit
    assumenda quos. Sint facere eaque consectetur autem aliquid quis accusantium expedita, unde voluptates debitis
    impedit, ut eius nesciunt. Saepe enim rerum quasi, exercitationem sit rem quia aliquid deleniti expedita labore
    facilis, autem doloribus qui in, illo aperiam nisi debitis? Corrupti quod asperiores a iusto incidunt ex debitis,
    quas cupiditate labore nostrum doloremque aliquid est quasi molestias delectus doloribus fugiat tempore. Sunt, cum
    ad laborum ullam amet quaerat nisi maiores ex sapiente? Nihil doloribus, ab laboriosam nemo rerum alias officiis! In
    eveniet laboriosam tempora quis perspiciatis deleniti nemo illum neque, omnis sint! Nisi unde laudantium harum modi
    architecto ipsa quam expedita. Veniam voluptatibus tenetur vero voluptas consequatur! Cupiditate assumenda expedita,
    nesciunt debitis excepturi commodi ea officia natus, eaque atque, vel libero nulla optio mollitia nihil consequuntur
    nisi alias labore? Incidunt optio quos sed blanditiis, aliquam earum, molestiae amet velit molestias reprehenderit
    quo cum error eius tempora consequatur necessitatibus possimus mollitia nobis non? Animi ullam unde perferendis,
    iusto nobis consectetur placeat. Nobis tempora enim nemo accusantium veniam. Molestiae dolore a excepturi iste
    perspiciatis illum, impedit reprehenderit placeat atque alias nemo dolorem corrupti illo asperiores laborum
    explicabo nesciunt aut sint doloribus eveniet suscipit! Numquam voluptas, obcaecati impedit sint voluptates rem
    ipsam temporibus reiciendis animi! Dolorem deserunt iure, accusamus aut officia alias cumque tempore eaque tenetur
    quae nemo reprehenderit impedit ea facilis beatae est blanditiis eius libero, repudiandae odit illum. Culpa vero
    nostrum aliquam natus impedit quisquam quae aperiam, aspernatur, harum qui iure recusandae, quia quis reiciendis
    provident ea. Dolore possimus, libero sapiente, sequi magnam reprehenderit maxime voluptates nemo vero praesentium
    repudiandae reiciendis earum nesciunt tenetur, laborum itaque corrupti! Minima id architecto delectus fuga illo
    consequatur aspernatur at quasi. In, illo cupiditate tenetur dolore temporibus similique dignissimos corporis
    distinctio quos, autem explicabo excepturi, ipsum nisi! Nesciunt, aspernatur. Ea, nulla neque eos soluta at iusto,
    corporis dolore cumque odit quod harum fugit ex quidem ipsa inventore corrupti architecto perspiciatis animi, esse
    sapiente quis itaque! Nisi nobis tenetur odit, dolorem enim eveniet aspernatur non, totam quaerat mollitia vel
    nesciunt ullam, est aliquam qui? Reiciendis nam exercitationem at voluptatem officia magnam, saepe deleniti
    excepturi quia optio sint rem neque repudiandae tenetur amet sunt, deserunt nesciunt non perferendis autem
    distinctio veritatis cupiditate eum! Officiis id tempora ipsam minima distinctio eaque nesciunt numquam eligendi rem
    eum quos ipsum delectus illum nam cupiditate fugit, vel repellendus porro eveniet. Blanditiis, distinctio. Neque,
    consectetur ullam placeat et repellat tempora laborum id? Ea, modi mollitia similique in, fugiat laboriosam
    provident veritatis omnis sapiente iure obcaecati cum a nobis est nam aperiam eum asperiores quod suscipit! Beatae
    neque quis omnis dolorem veritatis consequuntur vitae at ducimus eaque sed accusamus illo ipsum labore, corrupti
    blanditiis ex officia exercitationem sunt voluptas maxime. Iusto illum quaerat harum voluptates veniam incidunt iure
    est sint quisquam aliquam aperiam ea quibusdam maxime accusamus non voluptate facilis aut, ad rem? Dicta quos illum
    sunt quisquam quam ipsum quis, illo, reiciendis, unde libero ad veritatis repudiandae necessitatibus error odio
    suscipit aliquid itaque vero cupiditate quod perferendis nihil ea dolor. Ea aspernatur quos ex consequuntur deserunt
    numquam minima eveniet eos accusantium, incidunt, nostrum sunt quia ad sequi maiores necessitatibus, libero adipisci
    velit? At non, explicabo facilis itaque officiis, fugit vitae in iusto autem natus, quos impedit a eos. Deserunt
    voluptatibus numquam impedit harum delectus earum, ducimus cum temporibus soluta repellat sit aliquid facilis
    suscipit pariatur perferendis repudiandae autem laboriosam sapiente accusantium commodi dolores. Perspiciatis,
    quibusdam consequatur. Tenetur, officia vero mollitia quasi laboriosam dolore pariatur omnis porro esse tempore
    quidem praesentium delectus a. Animi distinctio perferendis voluptatibus corporis vel eaque debitis quibusdam
    placeat minima voluptas. Aliquam, numquam in quasi dicta libero architecto dolorum ut, ex itaque eius nisi dolores.
    Aspernatur mollitia ut velit autem cupiditate fugiat blanditiis laborum excepturi, delectus veritatis voluptates
    animi impedit nulla incidunt saepe ipsam adipisci iusto numquam, distinctio exercitationem deleniti ad explicabo
    pariatur quos. Consequatur quia blanditiis ad doloribus quod eum molestias voluptatem. Incidunt doloremque
    temporibus, similique corporis omnis sapiente at. Nemo illum voluptas ullam ab ipsa sapiente dolorem ex, eaque a,
    atque necessitatibus fuga deserunt accusantium non possimus? Veniam perferendis, ipsam commodi facilis omnis, vitae
    iure distinctio fuga illum, nobis quibusdam placeat laboriosam nulla consequatur quam modi perspiciatis suscipit
    temporibus a ut alias magni reiciendis. Quaerat at, eum fugiat fugit maxime ipsum sunt ipsam?
  </div>
);

export const LineClamp = LineClampTemplate.bind({});
