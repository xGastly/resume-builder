import { HTMLRenderer } from 'src/helpers/common/components/HTMLRenderer'
import { SectionHeading } from '../atoms/SectionHeading'
import { SectionText } from '../atoms/SectionText'

export const Objective = ({ objective }: { objective: string }) => {
  return (
    <>
      <SectionHeading title="Objective" />
      <SectionText>
        <HTMLRenderer htmlString={objective} />
      </SectionText>
    </>
  )
}
