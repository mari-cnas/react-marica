import { Dispatch, memo, SetStateAction, useCallback, useState } from 'react'

import { useNavigate } from 'react-router-dom'

import { CategoryType } from 'types/CategoryType'

import { CategoriesList, CategoryBtn } from './styled'

interface ICategoryProps {
  categories: CategoryType[] | undefined
  fetchCategory: (id: number) => void
  setCategoryValue?: Dispatch<SetStateAction<string>>
  pageNavigate?: boolean
}

const Category: React.FC<ICategoryProps> = ({
  categories,
  fetchCategory,
  setCategoryValue,
  pageNavigate,
}) => {
  const navigate = useNavigate()
  const [pgNavigate, setPgNavigate] = useState(pageNavigate)
  const handleCategoryButton = useCallback(
    (categoryId: number, categoryValue: string) => {
      // setPgNavigate(pageNavigate)
      if (pgNavigate === true) navigate(`/pontos-turisticos`)
      fetchCategory(categoryId)
      if (setCategoryValue) setCategoryValue(categoryValue)
      setPgNavigate(false)
    },
    [fetchCategory, setCategoryValue, navigate, pgNavigate],
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
