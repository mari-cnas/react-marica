import { Dispatch, memo, SetStateAction, useCallback } from 'react'

import { CategoryType } from 'types/CategoryType'

import { CategoriesList, CategoryBtn } from './styled'

interface ICategoryProps {
  categories: CategoryType[] | undefined
  fetchCategory: (id: number) => void
  setCategoryValue?: Dispatch<SetStateAction<string>>
}

const Category: React.FC<ICategoryProps> = ({
  categories,
  fetchCategory,
  setCategoryValue,
}) => {
  const handleCategoryButton = useCallback(
    (categoryId: number, categoryValue: string) => {
      fetchCategory(categoryId)
      if (setCategoryValue) setCategoryValue(categoryValue)
    },
    [fetchCategory, setCategoryValue],
  )

  return (
    <div className="mb-4">
      <CategoriesList>
        {categories?.map((category) => (
          <CategoryBtn
            key={category.id}
            value={category.label}
            type="button"
            onClick={() => handleCategoryButton(category.id, category.label)}
          >
            {category.label}
          </CategoryBtn>
        ))}
      </CategoriesList>
    </div>
  )
}

export default memo(Category)

// {categories?.map((category) => (
//   <Category
//     className="me-2 my-2"
//     key={category.id}
//     value={category.label}
//     onClick={handleSearch}
//   >
//     {category.label}
//   </Category>
// ))}
