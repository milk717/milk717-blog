import {ListBox} from '../../common/ListBox';
import {graphql, useStaticQuery} from 'gatsby';

type Props = {
  onClick: (tags: string) => void;
};
export const TagListBox: React.FC<Props> = ({onClick}) => {
  return (
    <ListBox
      title={'Tags'}
      onClick={onClick}
      list={
        useStaticQuery(graphql`
          query BlogTagsList {
            allMdx {
              group(field: {frontmatter: {tags: SELECT}}) {
                text: fieldValue
                subText: totalCount
              }
            }
          }
        `).allMdx.group
      }
    />
  );
};
