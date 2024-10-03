// Function to compute quizzes
    function computeQuizzes() {
      const q1 = parseInt(document.getElementById("txtQuiz1").value) || 0;
      const q2 = parseInt(document.getElementById("txtQuiz2").value) || 0;
      const q3 = parseInt(document.getElementById("txtQuiz3").value) || 0;

      const range1 = parseInt(document.getElementById("qRange1").value) || 0;
      const range2 = parseInt(document.getElementById("qRange2").value) || 0;
      const range3 = parseInt(document.getElementById("qRange3").value) || 0;

      let totalQuizzes;
      if (range1 + range2 + range3 > 0) {
        totalQuizzes = ((q1 + q2 + q3) / (range1 + range2 + range3)) * 100;
      } else {
        totalQuizzes = 0;
      }

      document.getElementById("totalQuizzes").value = totalQuizzes.toFixed(2);

      // Apply percentage if checkbox is checked
      if (document.getElementById("chkQuiz").checked) {
        document.getElementById("totalQuizzesWeighted").value = (totalQuizzes * 0.20).toFixed(2);
      } else {
        document.getElementById("totalQuizzesWeighted").value = 0;
      }
    }

    // Function to compute performance tasks
    function computePTasks() {
      const pt1 = parseInt(document.getElementById("txtPT1").value) || 0;
      const pt2 = parseInt(document.getElementById("txtPT2").value) || 0;
      const pt3 = parseInt(document.getElementById("txtPT3").value) || 0;

      const range1 = parseInt(document.getElementById("ptRange1").value) || 0;
      const range2 = parseInt(document.getElementById("ptRange2").value) || 0;
      const range3 = parseInt(document.getElementById("ptRange3").value) || 0;

      let totalPTasks;
      if (range1 + range2 + range3 > 0) {
        totalPTasks = ((pt1 + pt2 + pt3) / (range1 + range2 + range3)) * 100;
      } else {
        totalPTasks = 0;
      }

      document.getElementById("totalPTasks").value = totalPTasks.toFixed(2);

      // Apply percentage if checkbox is checked
      if (document.getElementById("chkPerformance").checked) {
        document.getElementById("totalPTasksWeighted").value = (totalPTasks * 0.60).toFixed(2);
      } else {
        document.getElementById("totalPTasksWeighted").value = 0;
      }
    }

    // Function to compute exam
    function getExam() {
      const exam = parseInt(document.getElementById("txtExam").value) || 0;
      const examRange = parseInt(document.getElementById("examRange").value) || 0;

      let examResult;
      if (examRange > 0) {
        examResult = (exam / examRange) * 100;
      } else {
        examResult = 0;
      }

      document.getElementById("chkExamResult").value = examResult.toFixed(2);

      // Apply percentage if checkbox is checked
      if (document.getElementById("chkExam").checked) {
        document.getElementById("txtPercentage").value = (examResult * 0.20).toFixed(2);
      } else {
        document.getElementById("txtPercentage").value = 0;
      }
    }

    // Function to compute final grade
    function computeGrade() {
      const quizzes = parseFloat(document.getElementById("totalQuizzesWeighted").value) || 0;
      const performance = parseFloat(document.getElementById("totalPTasksWeighted").value) || 0;
      const exam = parseFloat(document.getElementById("txtPercentage").value) || 0;

      const finalGrade = quizzes + performance + exam;
      document.getElementById("txtGrade").value = finalGrade.toFixed(2);
    }