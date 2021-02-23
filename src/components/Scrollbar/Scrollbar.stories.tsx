// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import { colorOptions } from '../../prebuiltTailwindTheme';
import classnames from 'classnames';

export default {
  title: 'Components/Scrollbar',
  argTypes: {
    color: {
      defaultValue: 'pui-primary',
      control: {
        type: 'select',
        options: colorOptions
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
 * @param props.color the color property set on controls
 * @param props.className the component classes
 */
const ScrollbarTemplate: Story = ({ color, className }) => (
  <div className={classnames('pui-scrollbar', { [`pui-color-${color}`]: color !== 'pui-primary' }, className)}>
    <div className="overflow-y-scroll max-h-56">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus veritatis animi voluptatem dicta similique aperiam
      accusamus dolorem minima vitae repudiandae. Impedit dolorem praesentium voluptatibus quis veritatis distinctio?
      Eaque sunt, adipisci minus pariatur illo cum eum tempore earum iste quas deserunt magni vero architecto modi iure
      sit commodi atque quisquam vel rerum. Voluptate, vitae explicabo neque odio temporibus non nemo quos illo libero
      error expedita facilis laborum. Nemo vel voluptates fugit asperiores placeat sit laborum! Ducimus nesciunt,
      aliquam id culpa ratione omnis rerum laborum. Numquam, perferendis. Placeat, libero nihil corporis sunt
      dignissimos ad beatae deleniti esse quidem aspernatur nam odit delectus ab enim mollitia perspiciatis provident.
      Assumenda dignissimos magni sapiente. Corrupti consectetur alias hic veniam. Omnis voluptatum placeat expedita
      tenetur ratione neque animi dignissimos et quo a voluptatem vel esse corporis eius nam, odio corrupti
      consequuntur! Provident quisquam, ipsa eveniet dolores tempora odio repudiandae magni vero mollitia sint eligendi
      quo deserunt maiores fugiat. Eligendi quis neque quas porro, blanditiis quos consequuntur odit cum, quo magnam
      eius voluptates numquam totam doloribus sequi. Unde recusandae minus minima ullam repellat itaque autem dolorum
      eum, numquam molestiae quia laudantium dignissimos pariatur excepturi corporis deserunt corrupti est atque nisi.
      Laborum, consequuntur fuga assumenda, blanditiis, adipisci repudiandae aut et eaque doloribus corporis repellendus
      nihil deserunt. Molestias debitis dolorum fugiat, ratione illo facere quam sunt dignissimos quaerat a atque.
      Doloribus, blanditiis! Adipisci odit placeat reiciendis repellendus minima maxime accusantium! Recusandae
      voluptates reprehenderit placeat facere quis illo aut minima quod ipsam obcaecati. Nulla aliquam fugiat quasi
      excepturi distinctio odit, quidem beatae qui fugit suscipit ab corrupti, ut nesciunt, eos quisquam cum sit! Et
      eveniet corporis libero quibusdam quidem exercitationem illum suscipit assumenda dolores. Velit deleniti fugiat
      ducimus nisi cupiditate quas tempore accusantium molestias, minima sapiente aliquid suscipit delectus cumque
      perspiciatis placeat quam harum omnis eos. Quo ea impedit soluta!
    </div>
  </div>
);

export const Scrollbar = ScrollbarTemplate.bind({});
