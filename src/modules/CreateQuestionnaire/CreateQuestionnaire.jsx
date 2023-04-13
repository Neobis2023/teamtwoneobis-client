import { useEffect, useState }  from 'react';
import SaveButton from '../../pages/Admin/components/SaveButton';
import CreateQuestion from './CreateQuestion';
import InputV2 from './InputV2';
import {
  useCreateQuestionnaireMutation,
  useGetQuestionnairesQuery
} from '../../helpers/reduxToolkit/apis/questionnaire-api';
import {useDispatch, useSelector} from 'react-redux';
import {saveQuestionnaireID} from '../../helpers/reduxToolkit/questionnaireSlice';

const CreateQuestionnaire = () => {
  const lastSavedQuestionnaireId = useSelector((state) => state.questionnaire.lastSavedQuestionnaireId);
  const dispatch = useDispatch();
  const [questions, setQuestions] = useState([]);
  const [questionCount, setQuestionCount] = useState(0);
  const [isPrevSaved, setIsPrevSaved] = useState(null);
  
  // const { data, isLoading } = useGetQuestionnairesQuery();
  const [ createQuestionnaire, { isLoading, data }] = useCreateQuestionnaireMutation();
  
  console.log(lastSavedQuestionnaireId);
  console.log('response', data);
  
  const handleDelete = (id) => {
    setQuestions(prev => {
      const remainingQuestions = prev.filter(curr => curr.id !== id);
      
      const updatedQuestions = remainingQuestions.map((curr, index) => ({
        ...curr,
        index
      }));
      
      return updatedQuestions;
    });
  };
  
  const handleAddQuestion = () => {
    if (isPrevSaved || (questionCount === 0)) {
      setQuestions(prev => {
        const newQuestion = {
          id: questionCount,
          index: prev.length
        };
        
        setIsPrevSaved(false);
        setQuestionCount(prev => prev + 1);
        return [...prev, newQuestion];
      });
    }

    console.log(isPrevSaved)
  };
  
  const getDataFromChild = (id, question) => {
    setQuestions(questions.map((quest) => {
      if(quest.id !== id) return quest;
      return {...quest, ...question };
    }))
  }
  
  const handleSave = async () => {
    const questionnaire = {
      name: 'New questionnaire',
    };
    questionnaire.questions = questions;
    const result = await createQuestionnaire(questionnaire);
    const resultQuestionnaireID = result.data.id;
    dispatch(saveQuestionnaireID(resultQuestionnaireID))
    console.log(result, "***");
  }

  const getSavedStatus = (status) => {
    setIsPrevSaved(status)
  };
  
  useEffect(() => {
    console.log(questions);
  }, [questions]);

  
  return (
    <div className="flex flex-col gap-4">
      <InputV2 label={'Название анкеты'} />
      <div style={{width: '100%', height: '.5px', border: '1px solid black'}}></div>
      {questions.map(({ id, index }) => (
        <CreateQuestion
          key={id}
          id={id}
          idx={index}
          getDataFromChild={getDataFromChild}
          handleDelete={handleDelete}
          getSavedStatus={getSavedStatus}
        />
      ))}
      <div className='flex flex-col gap-2 relative'>
      <button
        type="button"
        className="w-fit text-[#9960C3] rounded-[8px] border border-[#9960C3] p-2"
        onClick={handleAddQuestion}
      >
        Добавить вопрос
      </button>
      <SaveButton onClick={handleSave}  text={"Сохранить"} className="w-fit" />
      </div>
    </div>
  );
};

export default CreateQuestionnaire;
